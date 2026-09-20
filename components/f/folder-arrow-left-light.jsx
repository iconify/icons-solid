import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9v97mbir.css';
import '../../css/t/tm3vgc7aa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9v97mbir"/><path clip-rule="evenodd" class="tm3vgc7aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-arrow-left-light"} {...others} />);
}

export default Component;
