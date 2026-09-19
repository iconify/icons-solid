import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc-_tnb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc-_tnb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chess-bishop-filled"} {...others} />);
}

export default Component;
