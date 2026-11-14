import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bt4xg4ftq.css';
import '../../css/f/fhas8sg6b.css';
import '../../css/r/rbw7kknaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bt4xg4ftq"/><path class="fhas8sg6b"/><path class="rbw7kknaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-done-01"} {...others} />);
}

export default Component;
