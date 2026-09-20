import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/f/f7e5_f.css';
import '../../css/k/kmrbxx.css';
import '../../css/v/vfzm1b.css';
import '../../css/s/siu27j.css';
import '../../css/s/so-from-40.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c f7e5_f"/><path class="a0m25c kmrbxx"/><path class="a0m25c vfzm1b"/><path class="a0m25c siu27j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:coffee-arrow"} {...others} />);
}

export default Component;
