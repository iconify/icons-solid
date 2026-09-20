import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/n/n65erebyy.css';
import '../../css/t/t7nge0ppf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="n65erebyy"/><path class="t7nge0ppf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:home-line"} {...others} />);
}

export default Component;
