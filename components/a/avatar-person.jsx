import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e2x-09boi.css';
import '../../css/i/iu_8r8inh.css';
import '../../css/b/baoogbiqr.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/o/o_yfqzfoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e2x-09boi"/><path class="iu_8r8inh"/><path class="baoogbiqr"/><path class="qk9xa2v5m"/><path class="o_yfqzfoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-person"} {...others} />);
}

export default Component;
