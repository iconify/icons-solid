import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owd0olb4z.css';
import '../../css/u/uili3kb4w.css';
import '../../css/p/pkzxvib-h.css';
import '../../css/s/sc8j2gaxp.css';
import '../../css/n/nugv4tm8e.css';
import '../../css/v/vwzisdb-w.css';
import '../../css/i/ib_z4-fzu.css';
import '../../css/t/t5axg9bnh.css';
import '../../css/j/j8cd3kb7u.css';
import '../../css/m/m0i9m8bjj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="owd0olb4z"/><path transform="scale(.9998)skewY(.003)" class="uili3kb4w"/><path transform="scale(.9998)skewY(.003)" class="pkzxvib-h"/><path transform="scale(.9998)skewY(.003)" class="sc8j2gaxp"/><path class="UnoptimicedTransforms nugv4tm8e"/><path class="UnoptimicedTransforms vwzisdb-w"/><path class="ib_z4-fzu"/><path transform="scale(.9998)skewY(.003)" class="t5axg9bnh"/><path transform="scale(.9998)skewY(.003)" class="j8cd3kb7u"/><path class="m0i9m8bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:guy-fawkes-mask"} {...others} />);
}

export default Component;
