import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0edu0xjc.css';
import '../../css/e/egv45zsgc.css';
import '../../css/g/gjagb39hl.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="g0edu0xjc"/><path class="egv45zsgc"/><path class="gjagb39hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:hot-tub"} {...others} />);
}

export default Component;
