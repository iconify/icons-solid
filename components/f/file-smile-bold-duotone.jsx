import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6gwrmjs.css';
import '../../css/z/zm8jc6bmu.css';
import '../../css/w/wo04hje9a.css';
import '../../css/t/t0pm9yw2p.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="zm8jc6bmu"/><path class="wo04hje9a"/><path class="t0pm9yw2p"/><path class="x4f46-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-smile-bold-duotone"} {...others} />);
}

export default Component;
