import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jeyfkhb4r.css';
import '../../css/t/t7d2d5bdd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jeyfkhb4r"/><path class="t7d2d5bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fmd"} {...others} />);
}

export default Component;
