import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhls-y5sy.css';

const viewBox = {"width":1472,"height":1600};
const content = `<path class="bhls-y5sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:mobile"} {...others} />);
}

export default Component;
