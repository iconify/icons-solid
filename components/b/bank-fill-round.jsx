import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm_0jcbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mm_0jcbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bank-fill-round"} {...others} />);
}

export default Component;
