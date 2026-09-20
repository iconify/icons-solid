import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7q3yfbdi.css';
import '../../css/p/p9omok_2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7q3yfbdi"/><path class="p9omok_2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:call-forwarded-filled"} {...others} />);
}

export default Component;
