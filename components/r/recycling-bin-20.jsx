import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdqwsub7z.css';
import '../../css/s/sm2cie-7l.css';
import '../../css/y/ywoaiko1i.css';
import '../../css/n/n0gk87bfr.css';
import '../../css/a/a-v5b_b7m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fdqwsub7z"/><path class="sm2cie-7l"/><path class="ywoaiko1i"/><path class="n0gk87bfr"/><path class="a-v5b_b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recycling-bin-20"} {...others} />);
}

export default Component;
