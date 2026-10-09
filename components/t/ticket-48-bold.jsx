import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-7-2mbbf.css';
import '../../css/o/o76p7lbzo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u-7-2mbbf"/><path class="o76p7lbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ticket-48-bold"} {...others} />);
}

export default Component;
