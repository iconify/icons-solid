import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idqp0obpf.css';
import '../../css/v/v5z6z71fv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="idqp0obpf"/><path class="v5z6z71fv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eject-16"} {...others} />);
}

export default Component;
