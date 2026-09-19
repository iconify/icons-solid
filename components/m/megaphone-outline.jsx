import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3f1cdmin.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="s3f1cdmin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:megaphone-outline"} {...others} />);
}

export default Component;
