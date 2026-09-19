import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b-div1bns.css';
import '../../css/i/i75ax53xw.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};
const content = `<defs><mask id="SVGyiuSLeoF"><g class="aql7dnt-u"><path class="b-div1bns"/><path class="i75ax53xw"/></g></mask></defs><path mask="url(#SVGyiuSLeoF)" class="maw6_-12u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:kettle"} {...others} />);
}

export default Component;
