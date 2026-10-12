import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a88-_pnxg.css';
import '../../css/o/ocasejnlo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a88-_pnxg"/><path class="ocasejnlo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:discount-48-bold"} {...others} />);
}

export default Component;
