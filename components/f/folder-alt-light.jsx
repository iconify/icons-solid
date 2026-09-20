import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a24b_-4jq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a24b_-4jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-alt-light"} {...others} />);
}

export default Component;
