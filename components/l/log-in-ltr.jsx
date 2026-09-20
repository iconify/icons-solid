import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh-fv613y.css';
import '../../css/l/leg-f-qxq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kh-fv613y"/><path class="leg-f-qxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:log-in-ltr"} {...others} />);
}

export default Component;
