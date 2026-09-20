import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oldk_zc-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oldk_zc-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bookmark-upload-fill"} {...others} />);
}

export default Component;
