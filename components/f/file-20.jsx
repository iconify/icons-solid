import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-g74icta.css';
import '../../css/c/ci72u-bcu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-g74icta"/><path class="ci72u-bcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-20"} {...others} />);
}

export default Component;
