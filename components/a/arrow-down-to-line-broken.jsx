import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u09qwnbtf.css';
import '../../css/p/p-1nc6b6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u09qwnbtf"/><path class="p-1nc6b6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-to-line-broken"} {...others} />);
}

export default Component;
