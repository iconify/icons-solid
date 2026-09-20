import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq0eadb-w.css';
import '../../css/p/pav98pbev.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qq0eadb-w"/><path class="pav98pbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adminer"} {...others} />);
}

export default Component;
