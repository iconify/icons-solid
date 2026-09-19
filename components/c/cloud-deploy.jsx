import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_4ht5bkm.css';
import '../../css/q/q2dc-8bor.css';
import '../../css/b/b0jxrubul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_4ht5bkm"/><path class="q2dc-8bor"/><path class="b0jxrubul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-deploy"} {...others} />);
}

export default Component;
