import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fcanezbfn.css';
import '../../css/s/sro91sbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fcanezbfn"/><path class="sro91sbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:save-multiple"} {...others} />);
}

export default Component;
