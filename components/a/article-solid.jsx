import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm4o4i1ir.css';
import '../../css/x/xh2cg4l2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm4o4i1ir"/><path class="xh2cg4l2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-solid"} {...others} />);
}

export default Component;
