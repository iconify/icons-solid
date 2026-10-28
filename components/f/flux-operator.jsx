import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9gh3cbby.css';
import '../../css/g/gljjdb6ri.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o9gh3cbby"/><path class="gljjdb6ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flux-operator"} {...others} />);
}

export default Component;
