import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct5bir.css';
import '../../css/a/a0m25c.css';
import '../../css/m/m2hv7f.css';
import '../../css/x/xf_gao.css';
import '../../css/d/d-3fqnuo.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ct5bir"/><path class="a0m25c m2hv7f"/><path class="a0m25c xf_gao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:steering"} {...others} />);
}

export default Component;
