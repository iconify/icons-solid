import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur5jexbzl.css';
import '../../css/y/y_9pn2b8h.css';
import '../../css/p/pvw_3wb9o.css';
import '../../css/z/zwjesrbdj.css';
import '../../css/w/w5yzg_hcd.css';
import '../../css/n/nid7c9jbe.css';
import '../../css/p/pjzyfibob.css';
import '../../css/g/g5mns5bvh.css';

const viewBox = {"width":3473,"height":3473};
const content = `<path class="ur5jexbzl"/><g class="y_9pn2b8h"><path class="pvw_3wb9o"/><path class="zwjesrbdj"/></g><path class="w5yzg_hcd"/><path class="nid7c9jbe"/><path class="pjzyfibob"/><path class="g5mns5bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:editorconfig"} {...others} />);
}

export default Component;
