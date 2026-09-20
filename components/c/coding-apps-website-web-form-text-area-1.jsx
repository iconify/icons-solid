import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mlneatbfz.css';
import '../../css/i/i-218secy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mlneatbfz"/><path class="i-218secy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-web-form-text-area-1"} {...others} />);
}

export default Component;
