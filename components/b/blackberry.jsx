import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_tnyzakk.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="h_tnyzakk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:blackberry"} {...others} />);
}

export default Component;
