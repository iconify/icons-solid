import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia_fg_bav.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="ia_fg_bav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:search-sm"} {...others} />);
}

export default Component;
