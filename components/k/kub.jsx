import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky3n2u_io.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ky3n2u_io"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kub"} {...others} />);
}

export default Component;
