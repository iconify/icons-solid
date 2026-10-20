import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1wytabzg.css';
import '../../css/n/n65fkti1c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a1wytabzg"/><path class="n65fkti1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:binoculars-48-bold"} {...others} />);
}

export default Component;
