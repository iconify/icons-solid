import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrgf_rbum.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zrgf_rbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:universal-access-alt"} {...others} />);
}

export default Component;
