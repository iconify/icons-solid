import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/tmj7g6goi.css';
import '../../css/g/gg1lczq6x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="tmj7g6goi"/><path class="gg1lczq6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:umbrella-one"} {...others} />);
}

export default Component;
