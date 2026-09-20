import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4fzb36am.css';
import '../../css/a/a463ttbch.css';
import '../../css/h/hnevtaczd.css';
import '../../css/u/u3hslpbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4fzb36am"/><path class="a463ttbch"/><path class="hnevtaczd"/><path clip-rule="evenodd" class="u3hslpbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:emoji-wink-plus-light"} {...others} />);
}

export default Component;
