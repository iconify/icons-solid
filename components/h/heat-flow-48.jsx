import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuvrmqbix.css';
import '../../css/z/z2tgbdc9c.css';
import '../../css/q/q3_ql_27a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iuvrmqbix"/><path class="z2tgbdc9c"/><path class="q3_ql_27a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-flow-48"} {...others} />);
}

export default Component;
