import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0gvw96fa.css';
import '../../css/h/hw9ee6laf.css';
import '../../css/a/aitp4sbms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l0gvw96fa"/><path class="hw9ee6laf"/><path clip-rule="evenodd" class="aitp4sbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-outline"} {...others} />);
}

export default Component;
