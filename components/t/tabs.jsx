import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rrkjydeid.css';
import '../../css/c/clhe63_8r.css';
import '../../css/w/w2ixxib2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="rrkjydeid"/><path vector-effect="non-scaling-stroke" class="clhe63_8r"/><path vector-effect="non-scaling-stroke" class="w2ixxib2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:tabs"} {...others} />);
}

export default Component;
