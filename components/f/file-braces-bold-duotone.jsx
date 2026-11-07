import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jav_zgbsf.css';
import '../../css/l/l3981gogh.css';
import '../../css/u/ubn_7xb7s.css';
import '../../css/o/oj6gwrmjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jav_zgbsf"/><path class="l3981gogh"/><path class="ubn_7xb7s"/><path clip-rule="evenodd" class="oj6gwrmjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-braces-bold-duotone"} {...others} />);
}

export default Component;
