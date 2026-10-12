import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fx8ixmbue.css';
import '../../css/y/y768ywb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fx8ixmbue"/><path class="y768ywb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh"} {...others} />);
}

export default Component;
