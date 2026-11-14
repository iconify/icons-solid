import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/ji5eo813c.css';
import '../../css/n/nkjssnbsa.css';
import '../../css/t/t46b2zber.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="ji5eo813c"/><path class="nkjssnbsa"/><path class="t46b2zber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:app-charging"} {...others} />);
}

export default Component;
