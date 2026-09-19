import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmntw8r6r.css';
import '../../css/p/p5rzzbcho.css';

const viewBox = {"width":16,"height":9};
const content = `<path class="nmntw8r6r"/><path class="p5rzzbcho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:arrowleft"} {...others} />);
}

export default Component;
