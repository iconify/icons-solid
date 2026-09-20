import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjngycc7b.css';
import '../../css/o/ooafjrbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjngycc7b"/><path class="ooafjrbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:face-laugh-squint"} {...others} />);
}

export default Component;
