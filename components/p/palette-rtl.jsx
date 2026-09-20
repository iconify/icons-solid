import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzwx4mbfz.css';
import '../../css/c/ca-_ht2ki.css';
import '../../css/q/q2m0dq3ja.css';
import '../../css/s/sdoxd1bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nzwx4mbfz"/><circle class="ca-_ht2ki"/><circle class="q2m0dq3ja"/><circle class="sdoxd1bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:palette-rtl"} {...others} />);
}

export default Component;
