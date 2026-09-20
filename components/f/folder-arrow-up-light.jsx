import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a25lgubxm.css';
import '../../css/t/tm3vgc7aa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a25lgubxm"/><path clip-rule="evenodd" class="tm3vgc7aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-arrow-up-light"} {...others} />);
}

export default Component;
