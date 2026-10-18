import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3cdfdc7r.css';
import '../../css/h/hhu4-ib3s.css';
import '../../css/l/l1yyp3cyj.css';
import '../../css/x/xv00olu6r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o3cdfdc7r"/><path class="hhu4-ib3s"/><path class="l1yyp3cyj"/><path class="xv00olu6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:net-metering-20-bold"} {...others} />);
}

export default Component;
