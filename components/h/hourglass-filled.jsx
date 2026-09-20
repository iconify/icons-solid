import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgtc5k58y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgtc5k58y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hourglass-filled"} {...others} />);
}

export default Component;
