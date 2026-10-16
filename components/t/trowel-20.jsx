import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgd5ds6is.css';
import '../../css/i/i1nkquj9v.css';
import '../../css/u/u9bld2bat.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zgd5ds6is"/><path class="i1nkquj9v"/><path class="u9bld2bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trowel-20"} {...others} />);
}

export default Component;
