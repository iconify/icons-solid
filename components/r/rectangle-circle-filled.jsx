import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc9rjmb9n.css';
import '../../css/p/p7s3evb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vc9rjmb9n"/><path class="p7s3evb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rectangle-circle-filled"} {...others} />);
}

export default Component;
