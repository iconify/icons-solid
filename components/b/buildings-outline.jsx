import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfdcx75ii.css';
import '../../css/u/ujjw328am.css';
import '../../css/h/h73hhs93v.css';
import '../../css/g/gh-38ib2j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qfdcx75ii"/><path clip-rule="evenodd" class="ujjw328am"/><path class="h73hhs93v"/><path clip-rule="evenodd" class="gh-38ib2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:buildings-outline"} {...others} />);
}

export default Component;
