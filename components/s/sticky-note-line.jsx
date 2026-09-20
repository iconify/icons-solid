import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hza_l0bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hza_l0bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sticky-note-line"} {...others} />);
}

export default Component;
