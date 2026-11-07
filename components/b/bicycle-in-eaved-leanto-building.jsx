import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8ojm6b_c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h8ojm6b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bicycle-in-eaved-leanto-building"} {...others} />);
}

export default Component;
