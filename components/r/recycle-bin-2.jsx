import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/z_buddc8f.css';
import '../../css/l/l8fzhbbbw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="z_buddc8f"/><path class="l8fzhbbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:recycle-bin-2"} {...others} />);
}

export default Component;
