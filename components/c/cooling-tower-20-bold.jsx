import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6z7-hvpd.css';
import '../../css/m/ms-gp00fr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a6z7-hvpd"/><path class="ms-gp00fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cooling-tower-20-bold"} {...others} />);
}

export default Component;
