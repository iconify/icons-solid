import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxwf4h5in.css';
import '../../css/b/bqf--ueux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxwf4h5in"/><path clip-rule="evenodd" class="bqf--ueux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:gmail-outline"} {...others} />);
}

export default Component;
