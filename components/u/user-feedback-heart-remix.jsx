import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn3tl47hd.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fn3tl47hd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-feedback-heart-remix"} {...others} />);
}

export default Component;
