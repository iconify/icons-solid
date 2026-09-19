import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li74_n4iw.css';

const viewBox = {"width":304,"height":472};
const content = `<path class="li74_n4iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:hand-pointer-top"} {...others} />);
}

export default Component;
