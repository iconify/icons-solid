import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8w4i5ywu.css';
import '../../css/f/fy5v8duia.css';
import '../../css/a/a-8czfekn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a8w4i5ywu"/><path class="fy5v8duia"/><path class="a-8czfekn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spot-price-48"} {...others} />);
}

export default Component;
