import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9adr-b_h.css';
import '../../css/d/d7q3yfbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9adr-b_h"/><path class="d7q3yfbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:call-incoming-filled"} {...others} />);
}

export default Component;
