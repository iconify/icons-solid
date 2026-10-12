import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7pypebcb.css';
import '../../css/c/cgjl_2bdu.css';
import '../../css/m/m2-yovtjn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r7pypebcb"/><path class="cgjl_2bdu"/><path class="m2-yovtjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:logo-instagram-20"} {...others} />);
}

export default Component;
