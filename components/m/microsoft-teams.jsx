import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a1ibtdbnq.css';
import '../../css/a/ay6sqcctf.css';
import '../../css/w/w22cj2-bq.css';
import '../../css/r/rd5yq9v5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="a1ibtdbnq"/><circle class="ay6sqcctf"/><path class="w22cj2-bq"/><path class="rd5yq9v5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:microsoft-teams"} {...others} />);
}

export default Component;
