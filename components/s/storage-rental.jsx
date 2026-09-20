import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_c3n_rwo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k_c3n_rwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:storage-rental"} {...others} />);
}

export default Component;
