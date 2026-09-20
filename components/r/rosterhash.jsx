import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fprq_0fsn.css';
import '../../css/p/p__zjibpv.css';
import '../../css/z/zsuyb4b9u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fprq_0fsn"/><path class="p__zjibpv"/><path class="zsuyb4b9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rosterhash"} {...others} />);
}

export default Component;
