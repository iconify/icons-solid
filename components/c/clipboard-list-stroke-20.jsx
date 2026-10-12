import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efpda2bqy.css';
import '../../css/m/mme4osblq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="efpda2bqy"/><path class="mme4osblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clipboard-list-stroke-20"} {...others} />);
}

export default Component;
