import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4d0f0bno.css';
import '../../css/m/mlneatbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c4d0f0bno"/><path class="mlneatbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:adobe-after-effects-logo"} {...others} />);
}

export default Component;
