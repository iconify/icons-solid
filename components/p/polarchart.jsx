import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v49u3ub2d.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="v49u3ub2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:polarchart"} {...others} />);
}

export default Component;
