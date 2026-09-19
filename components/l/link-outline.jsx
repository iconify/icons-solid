import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hbn71sjeo.css';
import '../../css/z/zai84lbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="link-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="hbn71sjeo"/><path class="zai84lbsw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:link-outline"} {...others} />);
}

export default Component;
