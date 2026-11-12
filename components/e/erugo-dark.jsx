import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvje_n8dl.css';
import '../../css/j/jryvqzq_f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dvje_n8dl"/><path class="jryvqzq_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:erugo-dark"} {...others} />);
}

export default Component;
