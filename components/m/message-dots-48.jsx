import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me-xmbmth.css';
import '../../css/a/a_pmb6bdd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="me-xmbmth"/><path class="a_pmb6bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-dots-48"} {...others} />);
}

export default Component;
