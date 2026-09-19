import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tokrscowc.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="tokrscowc"/><circle class="lmf0ecbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:media-changer-solid-badged"} {...others} />);
}

export default Component;
