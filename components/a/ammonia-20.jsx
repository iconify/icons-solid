import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gliza6bbj.css';
import '../../css/x/x8oc9s62k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gliza6bbj"/><path class="x8oc9s62k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammonia-20"} {...others} />);
}

export default Component;
