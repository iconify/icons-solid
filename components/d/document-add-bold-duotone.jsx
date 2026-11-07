import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4w_uybke.css';
import '../../css/z/z8aa66xdv.css';
import '../../css/i/ii6lc6bis.css';
import '../../css/y/ywvami7tw.css';
import '../../css/x/xomgbsvxd.css';
import '../../css/r/rla1avb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4w_uybke"/><path class="z8aa66xdv"/><path class="ii6lc6bis"/><path class="ywvami7tw"/><path class="xomgbsvxd"/><path class="rla1avb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-add-bold-duotone"} {...others} />);
}

export default Component;
