import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6s896bnq.css';
import '../../css/b/bur656b8s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z6s896bnq"/><path class="bur656b8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:button-solid"} {...others} />);
}

export default Component;
