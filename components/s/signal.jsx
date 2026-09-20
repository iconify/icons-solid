import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mji2cccso.css';
import '../../css/q/q2jwsje5o.css';
import '../../css/x/x1yme9bxx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mji2cccso"/><path class="q2jwsje5o"/><path class="x1yme9bxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:signal"} {...others} />);
}

export default Component;
