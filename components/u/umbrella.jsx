import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a-o3p70ho.css';
import '../../css/k/kg4g4hx7l.css';
import '../../css/k/k-rq_votj.css';
import '../../css/c/cqc7tx56v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a-o3p70ho wm-shadow"/><path class="kg4g4hx7l wm-shadow"/><path class="k-rq_votj"/><path class="cqc7tx56v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:umbrella"} {...others} />);
}

export default Component;
