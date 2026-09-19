import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb5dzpbru.css';
import '../../css/h/h8kldlbhr.css';
import '../../css/c/cxd7u3b8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bb5dzpbru"/><path class="h8kldlbhr"/><path class="cxd7u3b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:nomouth"} {...others} />);
}

export default Component;
