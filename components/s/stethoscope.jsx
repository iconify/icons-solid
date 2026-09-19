import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7dcahbqk.css';

const viewBox = {"width":19,"height":24};
const content = `<path class="d7dcahbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:stethoscope"} {...others} />);
}

export default Component;
