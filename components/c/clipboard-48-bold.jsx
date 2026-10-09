import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0d0xub9d.css';
import '../../css/n/nqv533bqs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x0d0xub9d"/><path class="nqv533bqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-48-bold"} {...others} />);
}

export default Component;
