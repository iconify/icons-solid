import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja86lubud.css';
import '../../css/s/s78ya2efd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ja86lubud"/><path class="s78ya2efd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:comment-alt-message"} {...others} />);
}

export default Component;
