import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m5xo9q25w.css';
import '../../css/h/hizj3i7nm.css';
import '../../css/h/hytsqkbim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="m5xo9q25w"/><path class="hizj3i7nm"/><path class="hytsqkbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:boiler"} {...others} />);
}

export default Component;
