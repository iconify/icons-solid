import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ox-f2-brs.css';
import '../../css/a/a4lf8gunw.css';
import '../../css/z/zggadzblb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ox-f2-brs"/><path class="a4lf8gunw"/><path class="zggadzblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:calendar-heart"} {...others} />);
}

export default Component;
