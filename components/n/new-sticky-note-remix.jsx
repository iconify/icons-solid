import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl_um2bnc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="sl_um2bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:new-sticky-note-remix"} {...others} />);
}

export default Component;
