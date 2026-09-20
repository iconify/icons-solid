import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kog1lbbds.css';
import '../../css/y/y8075zbup.css';
import '../../css/g/gskvlohco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="kog1lbbds"><path class="y8075zbup"/><path class="gskvlohco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kwaikat-kat-coder"} {...others} />);
}

export default Component;
