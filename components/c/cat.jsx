import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr58843mv.css';
import '../../css/c/c9r1x5bpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wr58843mv"/><path class="c9r1x5bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cat"} {...others} />);
}

export default Component;
