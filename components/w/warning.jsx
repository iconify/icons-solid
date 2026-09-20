import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajn19m5qg.css';
import '../../css/c/cadm6kfiu.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ajn19m5qg"/><path class="cadm6kfiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:warning"} {...others} />);
}

export default Component;
