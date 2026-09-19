import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/epagb2e0c.css';
import '../../css/c/cwmq39bts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="epagb2e0c"/><path class="cwmq39bts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-box"} {...others} />);
}

export default Component;
