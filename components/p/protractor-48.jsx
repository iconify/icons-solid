import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzqj8o9cj.css';
import '../../css/v/v8rh_m67z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kzqj8o9cj"/><path class="v8rh_m67z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:protractor-48"} {...others} />);
}

export default Component;
