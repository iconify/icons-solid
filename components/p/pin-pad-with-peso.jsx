import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enm4i5bnq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="enm4i5bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pin-pad-with-peso"} {...others} />);
}

export default Component;
