import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3v3qrbfh.css';
import '../../css/x/x5tsncc-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h3v3qrbfh"/><path class="x5tsncc-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-up-01"} {...others} />);
}

export default Component;
