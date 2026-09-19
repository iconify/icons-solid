import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e97cal7kt.css';
import '../../css/h/hzgy6wbai.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="e97cal7kt"/><path class="hzgy6wbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mail-open"} {...others} />);
}

export default Component;
