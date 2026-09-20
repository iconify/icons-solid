import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq2xs6b2z.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jq2xs6b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:memes-comment-reply-solid"} {...others} />);
}

export default Component;
