import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6-k0_bex.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="f6-k0_bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:arrowheads-up-right-circle"} {...others} />);
}

export default Component;
