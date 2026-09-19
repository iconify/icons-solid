import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg600_1ny.css';
import '../../css/g/g8xngh9xv.css';
import '../../css/i/ic9ebcqwq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="sg600_1ny"/><path clip-rule="evenodd" class="g8xngh9xv"/><path class="ic9ebcqwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:people-minus"} {...others} />);
}

export default Component;
