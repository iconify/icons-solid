import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m99dslsql.css';
import '../../css/x/xmhlqvb3r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m99dslsql"/><path class="xmhlqvb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pi-48"} {...others} />);
}

export default Component;
