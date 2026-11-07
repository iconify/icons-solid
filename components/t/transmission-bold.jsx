import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4ba7dbhr.css';
import '../../css/m/mo2l0vb2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o4ba7dbhr"/><path class="mo2l0vb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transmission-bold"} {...others} />);
}

export default Component;
