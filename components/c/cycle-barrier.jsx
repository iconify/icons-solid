import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm_kdvb4g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qm_kdvb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cycle-barrier"} {...others} />);
}

export default Component;
