import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuedu7c-d.css';
import '../../css/m/mf98adcos.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="kuedu7c-d"/><path class="mf98adcos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cross-circle"} {...others} />);
}

export default Component;
