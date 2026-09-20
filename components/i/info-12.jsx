import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhq7kcjjd.css';
import '../../css/c/ck8dpqbtj.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="uhq7kcjjd"/><path clip-rule="evenodd" class="ck8dpqbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:info-12"} {...others} />);
}

export default Component;
