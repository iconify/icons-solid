import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsa0nvhry.css';
import '../../css/a/akvx_0hja.css';
import '../../css/i/i4p6t7bdm.css';
import '../../css/b/byxrqbd5t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hsa0nvhry"/><path class="akvx_0hja"/><path class="i4p6t7bdm"/><path class="byxrqbd5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:denominate"} {...others} />);
}

export default Component;
