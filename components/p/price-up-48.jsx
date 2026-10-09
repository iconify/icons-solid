import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1ftczb6h.css';
import '../../css/j/jr9qnkhrr.css';
import '../../css/a/abgd3hbgx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g1ftczb6h"/><path class="jr9qnkhrr"/><path class="abgd3hbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-up-48"} {...others} />);
}

export default Component;
