import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ad49i-8hk.css';
import '../../css/q/q1srdbcur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ad49i-8hk"/><path class="q1srdbcur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-up-left-two-tone"} {...others} />);
}

export default Component;
