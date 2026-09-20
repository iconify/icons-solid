import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9uymhwhj.css';
import '../../css/v/veovc1s6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9uymhwhj"/><path class="veovc1s6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wallet"} {...others} />);
}

export default Component;
