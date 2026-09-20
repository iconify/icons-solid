import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krjyr2bou.css';
import '../../css/e/e9nqe7b2h.css';
import '../../css/k/k8ixw89dy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="krjyr2bou"/><path class="e9nqe7b2h"/><path class="k8ixw89dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:articles-rtl"} {...others} />);
}

export default Component;
