import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7j7gyb3w.css';
import '../../css/y/yh__sq91y.css';
import '../../css/h/hnwjkvvhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b7j7gyb3w"/><path class="yh__sq91y"/><path class="hnwjkvvhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:sun"} {...others} />);
}

export default Component;
