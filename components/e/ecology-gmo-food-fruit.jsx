import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0pndqzpr.css';
import '../../css/z/zrt59zbqc.css';
import '../../css/n/n4ddx_b7r.css';
import '../../css/y/ysf2mac5i.css';
import '../../css/e/ebuae_bkt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t0pndqzpr"/><path class="zrt59zbqc"/><path class="n4ddx_b7r"/><path class="ysf2mac5i"/><path class="ebuae_bkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-gmo-food-fruit"} {...others} />);
}

export default Component;
