import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acpxm6b7v.css';
import '../../css/t/tvz2u-b5t.css';
import '../../css/q/qte40pcjk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="acpxm6b7v"/><path class="tvz2u-b5t"/><path class="qte40pcjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:emc2"} {...others} />);
}

export default Component;
