import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_ohb3oum.css';
import '../../css/w/w5gn7_abn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="w_ohb3oum"/><path class="w5gn7_abn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:tachometer"} {...others} />);
}

export default Component;
