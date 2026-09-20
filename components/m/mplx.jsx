import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1zu-7ago.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d1zu-7ago"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mplx"} {...others} />);
}

export default Component;
