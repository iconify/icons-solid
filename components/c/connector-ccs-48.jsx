import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ect0zrm_l.css';
import '../../css/e/eing7xb8o.css';
import '../../css/b/b9-4p0nzw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ect0zrm_l"/><path class="eing7xb8o"/><path class="b9-4p0nzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-ccs-48"} {...others} />);
}

export default Component;
