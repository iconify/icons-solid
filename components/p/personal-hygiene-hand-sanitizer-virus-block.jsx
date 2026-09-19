import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/irmit6ben.css';
import '../../css/c/cf-ba1bac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="irmit6ben"/><path class="cf-ba1bac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-sanitizer-virus-block"} {...others} />);
}

export default Component;
