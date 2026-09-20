import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbjmc1hvx.css';
import '../../css/m/mu4g-lbau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cbjmc1hvx"/><path clip-rule="evenodd" class="mu4g-lbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:html5"} {...others} />);
}

export default Component;
