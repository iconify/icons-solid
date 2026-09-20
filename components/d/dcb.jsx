import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/actx8vb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="actx8vb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dcb"} {...others} />);
}

export default Component;
