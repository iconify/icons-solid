import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfk1c2byf.css';
import '../../css/r/rajq_0u2t.css';
import '../../css/e/e81vv4bfx.css';
import '../../css/q/qdj3mnb9m.css';
import '../../css/x/xz3gti4-e.css';
import '../../css/t/t3arku7jv.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/uwnsp8bcb.css';
import '../../css/q/qjx9trbsy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vfk1c2byf"/><path class="rajq_0u2t"/><path class="e81vv4bfx"/><path class="qdj3mnb9m"/><path class="xz3gti4-e"/><path class="t3arku7jv"/><g class="jn8qy4bru"><path class="uwnsp8bcb"/><path class="qjx9trbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:great-pyramid-of-giza"} {...others} />);
}

export default Component;
