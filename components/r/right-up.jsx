import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3fqakbcn.css';
import '../../css/s/s3i81qbkg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u3fqakbcn"/><path class="s3i81qbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:right-up"} {...others} />);
}

export default Component;
