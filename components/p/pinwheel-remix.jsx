import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgaj7hb_g.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qgaj7hb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pinwheel-remix"} {...others} />);
}

export default Component;
