import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxvnz_b5x.css';
import '../../css/n/nkjpvr3yx.css';
import '../../css/k/k692-916d.css';
import '../../css/n/nuzcmo-be.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uxvnz_b5x"/><path class="nkjpvr3yx"/><path class="k692-916d"/><path class="nuzcmo-be"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mvhr-48-bold"} {...others} />);
}

export default Component;
