import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-k2eg3fw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t-k2eg3fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:drag-squares-horizontal-light"} {...others} />);
}

export default Component;
