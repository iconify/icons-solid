import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znaj4nbie.css';
import '../../css/u/uc_6-wbbz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="znaj4nbie"/><path class="uc_6-wbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:intent-request-heal"} {...others} />);
}

export default Component;
