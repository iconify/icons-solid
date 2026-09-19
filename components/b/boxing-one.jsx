import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/v/v7_zg0b3e.css';
import '../../css/e/eoes09bhp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="v7_zg0b3e"/><path class="eoes09bhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:boxing-one"} {...others} />);
}

export default Component;
