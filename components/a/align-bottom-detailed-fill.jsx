import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj5qrwuif.css';
import '../../css/z/z1iti509n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj5qrwuif"/><path clip-rule="evenodd" class="z1iti509n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:align-bottom-detailed-fill"} {...others} />);
}

export default Component;
