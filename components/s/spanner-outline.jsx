import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqlamj4tr.css';
import '../../css/c/ctcmn9izu.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="uqlamj4tr"/><path class="ctcmn9izu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:spanner-outline"} {...others} />);
}

export default Component;
