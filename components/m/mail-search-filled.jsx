import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edfoyo7yi.css';
import '../../css/c/c1uddcbcz.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="edfoyo7yi"/><path class="c1uddcbcz"/><path class="zc_h-6bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-search-filled"} {...others} />);
}

export default Component;
