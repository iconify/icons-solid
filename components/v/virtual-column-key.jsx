import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl7jbz5fr.css';
import '../../css/h/h_3i35b7d.css';
import '../../css/y/y-dj3mnsk.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="gl7jbz5fr"/><path class="h_3i35b7d"/><path class="y-dj3mnsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:virtual-column-key"} {...others} />);
}

export default Component;
