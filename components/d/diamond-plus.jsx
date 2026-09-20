import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbc_il0ub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tbc_il0ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:diamond-plus"} {...others} />);
}

export default Component;
