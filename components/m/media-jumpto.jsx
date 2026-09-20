import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/adkmtobfu.css';
import '../../css/z/zr3ng-b-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="adkmtobfu"/><path class="zr3ng-b-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-jumpto"} {...others} />);
}

export default Component;
