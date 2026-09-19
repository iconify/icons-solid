import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmnevccbt.css';
import '../../css/v/vzdhx2clg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zmnevccbt"/><path class="vzdhx2clg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-folder-open"} {...others} />);
}

export default Component;
