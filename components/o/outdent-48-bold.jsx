import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo6zpuchv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mo6zpuchv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:outdent-48-bold"} {...others} />);
}

export default Component;
