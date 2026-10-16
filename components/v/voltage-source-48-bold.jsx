import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe8f_eb4j.css';
import '../../css/z/z8jeaq2_u.css';
import '../../css/j/j-2pke6of.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qe8f_eb4j"/><path class="z8jeaq2_u"/><path class="j-2pke6of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-source-48-bold"} {...others} />);
}

export default Component;
