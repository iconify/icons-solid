import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mmt_1abfi.css';
import '../../css/h/hnhxatb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mmt_1abfi"/><path class="hnhxatb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:accounting-coins"} {...others} />);
}

export default Component;
