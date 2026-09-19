import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqqtwhrrx.css';
import '../../css/z/zgm2r3bvm.css';
import '../../css/n/nm2dyfd2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vqqtwhrrx"/><path class="zgm2r3bvm"/><path class="nm2dyfd2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:buy-me-a-coffee"} {...others} />);
}

export default Component;
