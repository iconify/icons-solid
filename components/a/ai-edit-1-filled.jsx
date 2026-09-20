import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3kjyubpd.css';
import '../../css/i/i67ob3bwq.css';
import '../../css/e/esgx7hbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t3kjyubpd"/><path clip-rule="evenodd" class="i67ob3bwq"/><path class="esgx7hbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-edit-1-filled"} {...others} />);
}

export default Component;
