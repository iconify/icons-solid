import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hjk15qw-b.css';
import '../../css/a/ahy7r9h0a.css';
import '../../css/i/iuvqghvku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="hjk15qw-b"/><path class="ahy7r9h0a"/><path vector-effect="non-scaling-stroke" class="iuvqghvku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:format-list-bullets"} {...others} />);
}

export default Component;
