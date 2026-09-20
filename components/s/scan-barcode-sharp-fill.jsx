import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzap-88ur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rzap-88ur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-barcode-sharp-fill"} {...others} />);
}

export default Component;
