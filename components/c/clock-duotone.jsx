import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vla37tbfm.css';
import '../../css/b/blrbygq0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vla37tbfm"/><path class="blrbygq0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:clock-duotone"} {...others} />);
}

export default Component;
