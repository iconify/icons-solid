import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf9y1byy.css';
import '../../css/o/oo7eexbml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kuf9y1byy"/><path class="oo7eexbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:forbidden-bold"} {...others} />);
}

export default Component;
