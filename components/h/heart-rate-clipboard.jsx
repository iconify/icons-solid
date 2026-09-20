import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fvxi5gcwy.css';
import '../../css/u/u-repbc7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fvxi5gcwy"/><path class="u-repbc7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:heart-rate-clipboard"} {...others} />);
}

export default Component;
