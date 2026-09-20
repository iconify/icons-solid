import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/p/pwt-kj.css';
import '../../css/c/cejmhd.css';
import '../../css/j/jx3bms.css';
import '../../css/b/bjzq0h.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c pwt-kj"/><path class="a0m25c cejmhd"/><path class="a0m25c jx3bms"/><path class="a0m25c bjzq0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:align-right"} {...others} />);
}

export default Component;
