import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6rrh3byv.css';
import '../../css/q/qfiyzsrnv.css';
import '../../css/v/vhiyc9brz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f6rrh3byv"/><path class="qfiyzsrnv"/><path class="vhiyc9brz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:mutation-2"} {...others} />);
}

export default Component;
