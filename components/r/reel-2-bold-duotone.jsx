import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxqub0bkx.css';
import '../../css/u/uw2q8fo_m.css';
import '../../css/g/gep8t6bjz.css';
import '../../css/d/dkkib-ewx.css';
import '../../css/l/l7uqntb2z.css';
import '../../css/c/c4q01mb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxqub0bkx"/><path clip-rule="evenodd" class="uw2q8fo_m"/><path class="gep8t6bjz"/><path class="dkkib-ewx"/><path class="l7uqntb2z"/><path class="c4q01mb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-2-bold-duotone"} {...others} />);
}

export default Component;
