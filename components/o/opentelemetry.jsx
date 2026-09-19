import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6ulv6bdt.css';
import '../../css/k/ku4u7fl3c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="z6ulv6bdt"/><path class="ku4u7fl3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:opentelemetry"} {...others} />);
}

export default Component;
