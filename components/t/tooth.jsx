import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdvbsx3qh.css';
import '../../css/m/mcbo8-baa.css';
import '../../css/b/b7p5r0bvs.css';
import '../../css/z/zslsakbzg.css';
import '../../css/x/xl1sf6b1g.css';
import '../../css/p/py11iv_sw.css';
import '../../css/k/k7d77f0_x.css';
import '../../css/z/zk8yh87ub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdvbsx3qh wm-shadow"/><path class="mcbo8-baa wm-k"/><path class="b7p5r0bvs wm-k"/><path class="wm-k zslsakbzg"/><path class="wm-k xl1sf6b1g"/><path class="py11iv_sw wm-k"/><path class="k7d77f0_x wm-shine"/><path class="wm-deco zk8yh87ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:tooth"} {...others} />);
}

export default Component;
