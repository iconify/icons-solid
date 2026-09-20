import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h9-rb1b0g.css';
import '../../css/p/p0pk7fzja.css';
import '../../css/v/v3yoqgc_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h9-rb1b0g"/><path class="p0pk7fzja"/><path class="v3yoqgc_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:adobe-cloud-logo"} {...others} />);
}

export default Component;
