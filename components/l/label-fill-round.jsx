import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9q6e3ozi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t9q6e3ozi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:label-fill-round"} {...others} />);
}

export default Component;
