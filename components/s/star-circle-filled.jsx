import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb0yj6ylj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rb0yj6ylj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:star-circle-filled"} {...others} />);
}

export default Component;
