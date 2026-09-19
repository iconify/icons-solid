import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/beqxhtbkf.css';
import '../../css/w/wd6mpsb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="beqxhtbkf"/><path class="wd6mpsb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:reader-following-conversation"} {...others} />);
}

export default Component;
