import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nnt95obyn.css';
import '../../css/u/u7a3jrb2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nnt95obyn"/><path class="u7a3jrb2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:size"} {...others} />);
}

export default Component;
