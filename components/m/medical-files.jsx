import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zo7kwhb-r.css';
import '../../css/a/avz1rybom.css';
import '../../css/e/ehh3wwbgj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="zo7kwhb-r"/><path class="avz1rybom"/><path class="ehh3wwbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:medical-files"} {...others} />);
}

export default Component;
