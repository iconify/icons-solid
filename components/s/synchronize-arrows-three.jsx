import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qvbrehbrw.css';
import '../../css/q/qcxhw2byu.css';
import '../../css/s/sp2rwd6_z.css';
import '../../css/r/rzhpwcb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qvbrehbrw"/><path class="qcxhw2byu"/><path class="sp2rwd6_z"/><path class="rzhpwcb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:synchronize-arrows-three"} {...others} />);
}

export default Component;
