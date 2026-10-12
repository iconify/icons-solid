import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvj14fp0a.css';
import '../../css/m/m1vm8ebij.css';
import '../../css/v/vydbu88xu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fvj14fp0a"/><path class="m1vm8ebij"/><path class="vydbu88xu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-minus-20-bold"} {...others} />);
}

export default Component;
