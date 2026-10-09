import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur1gjzh2v.css';
import '../../css/u/uaklp-bbr.css';
import '../../css/e/ekmag7bro.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ur1gjzh2v"/><path class="uaklp-bbr"/><path class="ekmag7bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-elbow-48"} {...others} />);
}

export default Component;
