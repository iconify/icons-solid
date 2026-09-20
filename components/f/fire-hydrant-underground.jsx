import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eli7y2biq.css';
import '../../css/p/pb5i8-bvk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eli7y2biq"/><path class="pb5i8-bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:fire-hydrant-underground"} {...others} />);
}

export default Component;
