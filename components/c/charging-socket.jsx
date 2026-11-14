import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tbfwcshwt.css';
import '../../css/i/iu850bbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="tbfwcshwt"/><path class="iu850bbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-socket"} {...others} />);
}

export default Component;
