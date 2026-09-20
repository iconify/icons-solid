import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qqri5hbat.css';
import '../../css/j/ju9aqjm6y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qqri5hbat"/><path class="ju9aqjm6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:recycle-bin-3"} {...others} />);
}

export default Component;
