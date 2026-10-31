import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp8v_ebqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp8v_ebqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mobile-fill-round"} {...others} />);
}

export default Component;
