import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y83a6fpaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y83a6fpaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:barcode-scan"} {...others} />);
}

export default Component;
