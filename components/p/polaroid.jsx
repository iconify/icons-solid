import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/k7885bg-u.css';
import '../../css/k/khk7plbbe.css';
import '../../css/g/g0v7nqp1u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="k7885bg-u"/><path class="khk7plbbe"/><path class="g0v7nqp1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:polaroid"} {...others} />);
}

export default Component;
