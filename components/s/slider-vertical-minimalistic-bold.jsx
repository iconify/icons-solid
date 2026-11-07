import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpy6vikpy.css';
import '../../css/z/zsv18cbys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cpy6vikpy"/><path clip-rule="evenodd" class="zsv18cbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-minimalistic-bold"} {...others} />);
}

export default Component;
