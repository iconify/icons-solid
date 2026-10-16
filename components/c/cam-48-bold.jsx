import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shb46vb8z.css';
import '../../css/g/g-y7nybno.css';
import '../../css/n/njq8ibhrr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="shb46vb8z"/><path class="g-y7nybno"/><path class="njq8ibhrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cam-48-bold"} {...others} />);
}

export default Component;
