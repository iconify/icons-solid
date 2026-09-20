import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9r6e7sfq.css';
import '../../css/c/c7rjmslqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9r6e7sfq"/><path clip-rule="evenodd" class="c7rjmslqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:drag-squares-vertical-duotone"} {...others} />);
}

export default Component;
