import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/e/ew1mpj.css';
import '../../css/m/m0_dsb.css';
import '../../css/j/ju1zuh.css';
import '../../css/s/so-from-10.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c ew1mpj"/><path class="a0m25c m0_dsb"/><path class="a0m25c ju1zuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chevron-small-triple-left"} {...others} />);
}

export default Component;
