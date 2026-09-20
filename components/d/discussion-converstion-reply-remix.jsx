import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj7awu1ad.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="bj7awu1ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:discussion-converstion-reply-remix"} {...others} />);
}

export default Component;
