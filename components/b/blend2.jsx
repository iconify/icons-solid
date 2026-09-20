import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nu_5-4bcu.css';
import '../../css/h/he4gp5b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nu_5-4bcu"/><path class="he4gp5b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:blend2"} {...others} />);
}

export default Component;
