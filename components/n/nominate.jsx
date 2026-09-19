import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsa0nvhry.css';
import '../../css/a/akvx_0hja.css';
import '../../css/n/nqd-w4r2c.css';
import '../../css/b/byxrqbd5t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hsa0nvhry"/><path class="akvx_0hja"/><path class="nqd-w4r2c"/><path class="byxrqbd5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:nominate"} {...others} />);
}

export default Component;
