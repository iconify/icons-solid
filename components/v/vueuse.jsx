import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg17mhb7c.css';
import '../../css/q/qyzx5zbrf.css';

const viewBox = {"width":256,"height":277};
const content = `<path class="bg17mhb7c"/><path class="qyzx5zbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vueuse"} {...others} />);
}

export default Component;
