import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1db_x1ez.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="a1db_x1ez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-logo-linkedin-network-linkedin-professional"} {...others} />);
}

export default Component;
