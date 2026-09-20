import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omg2x9c5d.css';
import '../../css/r/r887q9nnn.css';
import '../../css/i/iuephsr1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="omg2x9c5d"/><path class="r887q9nnn"/><path class="iuephsr1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:task-list-pen"} {...others} />);
}

export default Component;
