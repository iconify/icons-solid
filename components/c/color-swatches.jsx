import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kh6ar9beh.css';
import '../../css/x/xy86oib6j.css';
import '../../css/p/pgjz8fb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kh6ar9beh"/><path class="xy86oib6j"/><path class="pgjz8fb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:color-swatches"} {...others} />);
}

export default Component;
