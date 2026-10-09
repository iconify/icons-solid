import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-g74icta.css';
import '../../css/s/sjzg4vb4w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-g74icta"/><path class="sjzg4vb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-text-20"} {...others} />);
}

export default Component;
