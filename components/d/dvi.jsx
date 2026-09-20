import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg77lubaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cg77lubaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dvi"} {...others} />);
}

export default Component;
