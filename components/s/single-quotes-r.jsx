import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb7_vib4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qb7_vib4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:single-quotes-r"} {...others} />);
}

export default Component;
