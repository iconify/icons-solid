import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c822n_byc.css';
import '../../css/j/jtxyyikiw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c822n_byc"/><path class="jtxyyikiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:buggregator"} {...others} />);
}

export default Component;
