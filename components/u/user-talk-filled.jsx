import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw_3-n8mp.css';
import '../../css/x/xu9n3sboz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw_3-n8mp"/><path class="xu9n3sboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-talk-filled"} {...others} />);
}

export default Component;
