import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suaf7nfwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="suaf7nfwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-transfer-vertical-bold"} {...others} />);
}

export default Component;
