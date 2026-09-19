import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i--4ambuk.css';
import '../../css/q/qzo006suv.css';

const viewBox = {"width":12,"height":12};
const content = `<circle class="i--4ambuk"/><path class="qzo006suv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:sun-stroke-12"} {...others} />);
}

export default Component;
