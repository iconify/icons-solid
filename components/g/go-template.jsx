import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duddcrv6n.css';
import '../../css/k/koyzp3bls.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="duddcrv6n"/><path class="koyzp3bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:go-template"} {...others} />);
}

export default Component;
