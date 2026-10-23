import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnlv64h8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jnlv64h8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-exclamation-point"} {...others} />);
}

export default Component;
