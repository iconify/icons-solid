import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr32j03ns.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dr32j03ns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:plane-ascending-above-water"} {...others} />);
}

export default Component;
