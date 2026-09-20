import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/s/ssaqwk.css';
import '../../css/n/na274t.css';
import '../../css/j/jip9fo.css';
import '../../css/p/p91oqf.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c ssaqwk"/><path class="a0m25c na274t"/><path class="a0m25c jip9fo"/><path class="a0m25c p91oqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:menu-fold-right"} {...others} />);
}

export default Component;
