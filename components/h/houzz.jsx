import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8yhhqb2h.css';

const viewBox = {"width":577.176,"height":1000};
const content = `<path class="m8yhhqb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:houzz"} {...others} />);
}

export default Component;
