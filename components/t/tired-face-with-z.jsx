import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-v_u_7lw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t-v_u_7lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tired-face-with-z"} {...others} />);
}

export default Component;
