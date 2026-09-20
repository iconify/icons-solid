import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m2qhl0bjv.css';
import '../../css/r/rn-2cioxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m2qhl0bjv"/><path class="rn-2cioxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:folder-add"} {...others} />);
}

export default Component;
