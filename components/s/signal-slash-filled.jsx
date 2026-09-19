import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rctg5spaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rctg5spaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:signal-slash-filled"} {...others} />);
}

export default Component;
