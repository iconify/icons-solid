import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3-6cmb1n.css';
import '../../css/c/cvxgdek1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q3-6cmb1n"/><path class="cvxgdek1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:security-user"} {...others} />);
}

export default Component;
