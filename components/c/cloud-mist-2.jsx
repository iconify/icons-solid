import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jd6lsrbdf.css';
import '../../css/f/fwj1e14xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jd6lsrbdf"/><path class="fwj1e14xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cloud-mist-2"} {...others} />);
}

export default Component;
