import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwpb1xudv.css';
import '../../css/f/f-bnc8bnz.css';
import '../../css/u/um4v6ab4h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mwpb1xudv"/><path class="f-bnc8bnz"/><path class="um4v6ab4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-conference"} {...others} />);
}

export default Component;
