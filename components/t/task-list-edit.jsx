import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nmh4hobqr.css';
import '../../css/b/bcpwqb5lb.css';
import '../../css/r/rw4n-fbbr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="nmh4hobqr"/><path class="bcpwqb5lb"/><path class="rw4n-fbbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:task-list-edit"} {...others} />);
}

export default Component;
