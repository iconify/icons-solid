import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/yuzfu5k0t.css';
import '../../css/y/ydbv6jbol.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="yuzfu5k0t"/><path class="ydbv6jbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:application"} {...others} />);
}

export default Component;
