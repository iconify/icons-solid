import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/itaimiz6e.css';
import '../../css/y/y_xsdac9i.css';
import '../../css/s/s_3yu-uqg.css';
import '../../css/h/h9vxrvbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="itaimiz6e wm-shadow"/><path class="wm-shadow y_xsdac9i"/><path class="s_3yu-uqg"/><path class="h9vxrvbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:settings-2"} {...others} />);
}

export default Component;
