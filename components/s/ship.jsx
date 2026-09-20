import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c-w5_4d6j.css';
import '../../css/t/tys1rgb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c-w5_4d6j"/><path class="tys1rgb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ship"} {...others} />);
}

export default Component;
