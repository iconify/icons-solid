import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/afqpz5gdg.css';
import '../../css/h/h4gq4n3jg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="afqpz5gdg"/><path class="h4gq4n3jg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-briefcase"} {...others} />);
}

export default Component;
