import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_gf1sbty.css';
import '../../css/q/qjwl0dbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b_gf1sbty"/><path class="qjwl0dbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:phone-incoming-fill"} {...others} />);
}

export default Component;
