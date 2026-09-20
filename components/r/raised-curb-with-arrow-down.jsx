import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u_5ebdr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k2u_5ebdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:raised-curb-with-arrow-down"} {...others} />);
}

export default Component;
