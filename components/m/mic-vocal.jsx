import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iou39ykgf.css';
import '../../css/h/henzudb_q.css';
import '../../css/p/p4pk7n9ub.css';
import '../../css/e/extxp5b4y.css';
import '../../css/z/z2ldssb2f.css';
import '../../css/q/q36-fkfaz.css';
import '../../css/e/e-7ctbbty.css';
import '../../css/y/y30cwibyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iou39ykgf wm-shadow"/><path class="henzudb_q wm-k"/><path class="p4pk7n9ub wm-k"/><path class="extxp5b4y wm-k"/><path class="wm-k z2ldssb2f"/><path class="q36-fkfaz wm-k"/><path class="e-7ctbbty wm-shine"/><path class="wm-a y30cwibyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:mic-vocal"} {...others} />);
}

export default Component;
