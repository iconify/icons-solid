import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q3gx62m9b.css';
import '../../css/o/otrke9bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q3gx62m9b"/><path class="otrke9bsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:toilet-paper"} {...others} />);
}

export default Component;
