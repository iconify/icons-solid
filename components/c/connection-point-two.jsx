import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gosx51uge.css';
import '../../css/a/agp8z31zm.css';
import '../../css/g/g1c1xhbvc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="gosx51uge"/><path class="agp8z31zm"/><path class="g1c1xhbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:connection-point-two"} {...others} />);
}

export default Component;
