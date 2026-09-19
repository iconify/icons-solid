import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewz6b-n0l.css';
import '../../css/x/x2s3-fbvs.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="ewz6b-n0l"/><path class="x2s3-fbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:macro-26"} {...others} />);
}

export default Component;
