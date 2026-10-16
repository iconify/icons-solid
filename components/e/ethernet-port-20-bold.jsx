import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e49if73uf.css';
import '../../css/e/emcb5offr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e49if73uf"/><path class="emcb5offr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ethernet-port-20-bold"} {...others} />);
}

export default Component;
