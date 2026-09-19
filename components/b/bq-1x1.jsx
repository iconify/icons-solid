import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l54fv-b6j.css';
import '../../css/n/ndyez317g.css';
import '../../css/b/bbx2t-b6x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l54fv-b6j"/><path class="ndyez317g"/><path class="bbx2t-b6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bq-1x1"} {...others} />);
}

export default Component;
