import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/m5ipfl-ew.css';
import '../../css/l/l3m1edc6e.css';
import '../../css/y/y6ess1bmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="m5ipfl-ew"/><circle class="l3m1edc6e"/><path class="y6ess1bmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-safe"} {...others} />);
}

export default Component;
