import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqkalnmoh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rqkalnmoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:archive-arrow-up-filled"} {...others} />);
}

export default Component;
