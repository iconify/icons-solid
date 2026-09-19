import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lljkc8ood.css';
import '../../css/c/cn4m4xbfq.css';
import '../../css/a/a1x6v0wfj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="lljkc8ood"><path class="cn4m4xbfq"/><path class="a1x6v0wfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:empty-battery"} {...others} />);
}

export default Component;
