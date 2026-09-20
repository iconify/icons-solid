import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qehczibes.css';
import '../../css/a/a0q8jibcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qehczibes"/><path class="a0q8jibcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:facebook-1"} {...others} />);
}

export default Component;
