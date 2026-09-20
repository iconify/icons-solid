import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ec87c8bbk.css';
import '../../css/r/r85fyrbba.css';
import '../../css/w/w1bio80ht.css';
import '../../css/o/ol1teczqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ec87c8bbk"/><path class="r85fyrbba"/><path class="w1bio80ht"/><path class="ol1teczqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:baby-stroller-1"} {...others} />);
}

export default Component;
