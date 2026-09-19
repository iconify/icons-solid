import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gn8s5_h2o.css';
import '../../css/f/fzazl3jbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gn8s5_h2o"/><path class="fzazl3jbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artificial-intelligence-03"} {...others} />);
}

export default Component;
