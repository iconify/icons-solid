import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fll0uqb6i.css';
import '../../css/l/ld1xfebwb.css';
import '../../css/n/na8v-abui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fll0uqb6i"/><path class="ld1xfebwb"/><path class="na8v-abui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laptop-warning"} {...others} />);
}

export default Component;
