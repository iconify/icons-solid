import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5whcobov.css';
import '../../css/o/ogvym8bkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g5whcobov"/><path class="ogvym8bkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:undo-02"} {...others} />);
}

export default Component;
