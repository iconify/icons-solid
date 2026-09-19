import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_8bvqb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="more-vertical-outline"><path class="Vector t_8bvqb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:more-vertical-outline"} {...others} />);
}

export default Component;
