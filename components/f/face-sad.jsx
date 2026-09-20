import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fndgsfbhl.css';
import '../../css/o/ooafjrbnh.css';
import '../../css/v/vd27ehbog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fndgsfbhl"/><path class="ooafjrbnh"/><path class="vd27ehbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:face-sad"} {...others} />);
}

export default Component;
