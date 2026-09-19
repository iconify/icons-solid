import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cdbbm841l.css';
import '../../css/e/esqy88r2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cdbbm841l"/><path class="esqy88r2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:suggestion"} {...others} />);
}

export default Component;
