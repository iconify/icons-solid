import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrx75fq_y.css';
import '../../css/h/hqbzombeh.css';
import '../../css/f/ftsamccnr.css';
import '../../css/s/se8vs5b7y.css';
import '../../css/p/pvk0wrb7l.css';
import '../../css/f/fdcwgl2hr.css';
import '../../css/x/x4-hzj80e.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="zrx75fq_y"/><path class="hqbzombeh"/><path class="ftsamccnr"/><path class="se8vs5b7y"/><path class="pvk0wrb7l"/><path class="fdcwgl2hr"/><path class="x4-hzj80e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ck-4x3"} {...others} />);
}

export default Component;
