import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l65qnwbfp.css';
import '../../css/t/t1ve2lb7z.css';
import '../../css/b/b03-2c0jf.css';
import '../../css/a/aj_f1ygkx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l65qnwbfp"/><path class="t1ve2lb7z"/><path class="b03-2c0jf"/><path class="aj_f1ygkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-cloud"} {...others} />);
}

export default Component;
