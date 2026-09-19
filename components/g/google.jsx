import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyx9zdb1f.css';
import '../../css/w/w484zvkie.css';
import '../../css/s/ssezr3bse.css';
import '../../css/x/x2ql91bbd.css';

const viewBox = {"width":87,"height":100.001};
const content = `<path class="cyx9zdb1f"/><path class="w484zvkie"/><path class="ssezr3bse"/><path class="x2ql91bbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:google"} {...others} />);
}

export default Component;
