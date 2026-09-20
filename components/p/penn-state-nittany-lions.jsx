import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk-qwvomb.css';
import '../../css/j/jfe6ttbpf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bk-qwvomb"/><path class="jfe6ttbpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:penn-state-nittany-lions"} {...others} />);
}

export default Component;
