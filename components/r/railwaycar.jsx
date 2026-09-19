import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3kcg8i2c.css';
import '../../css/g/g66qwwz6k.css';
import '../../css/g/gme-_ybfq.css';
import '../../css/c/cq3e4vbsx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v3kcg8i2c"/><path class="g66qwwz6k"/><path class="gme-_ybfq"/><path class="cq3e4vbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:railwaycar"} {...others} />);
}

export default Component;
