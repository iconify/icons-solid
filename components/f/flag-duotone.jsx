import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f173tacai.css';
import '../../css/o/odujwcczp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f173tacai"/><path class="odujwcczp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:flag-duotone"} {...others} />);
}

export default Component;
