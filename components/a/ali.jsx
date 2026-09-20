import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g82cs2e2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g82cs2e2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ali"} {...others} />);
}

export default Component;
