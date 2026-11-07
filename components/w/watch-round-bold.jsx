import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-3qw545f.css';
import '../../css/b/bf9x-hh2k.css';
import '../../css/c/crrii6bny.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e-3qw545f"/><path class="bf9x-hh2k"/><path class="crrii6bny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-bold"} {...others} />);
}

export default Component;
