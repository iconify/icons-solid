import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0p-2pbst.css';
import '../../css/e/efoiiwh-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0p-2pbst"/><path class="efoiiwh-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:4k-bold-duotone"} {...others} />);
}

export default Component;
