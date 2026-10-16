import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5qj0td2j.css';
import '../../css/v/vyrx1cnfi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h5qj0td2j"/><path class="vyrx1cnfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-bank-48-bold"} {...others} />);
}

export default Component;
