import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfm_umb2w.css';
import '../../css/z/zjqxlr-ee.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bfm_umb2w"/><path clip-rule="evenodd" class="zjqxlr-ee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:gift-filled"} {...others} />);
}

export default Component;
