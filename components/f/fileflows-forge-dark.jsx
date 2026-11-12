import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbiaeacws.css';
import '../../css/h/hjy0wjyzq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mbiaeacws"/><path class="hjy0wjyzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fileflows-forge-dark"} {...others} />);
}

export default Component;
