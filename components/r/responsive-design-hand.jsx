import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zxrigmblq.css';
import '../../css/i/ipx7x1ssi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zxrigmblq"/><path class="ipx7x1ssi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:responsive-design-hand"} {...others} />);
}

export default Component;
