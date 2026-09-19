import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8ga_xhyw.css';
import '../../css/c/cmxs_qw5o.css';

const viewBox = {"width":16,"height":16};
const content = `<path transform="matrix(1.26652 0 0 1.26466 -1.313 -1.572)" class="d8ga_xhyw"/><path class="cmxs_qw5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rdata"} {...others} />);
}

export default Component;
