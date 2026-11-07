import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1ow07v6l.css';
import '../../css/k/kwth7wbyd.css';
import '../../css/x/xbe4268py.css';
import '../../css/z/z-d-djbsf.css';
import '../../css/b/b2-d1dbrp.css';
import '../../css/h/hhtadbbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y1ow07v6l"/><path clip-rule="evenodd" class="kwth7wbyd"/><path class="xbe4268py"/><path class="z-d-djbsf"/><path class="b2-d1dbrp"/><path class="hhtadbbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-2-outline"} {...others} />);
}

export default Component;
