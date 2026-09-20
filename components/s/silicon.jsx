import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl3zvd-ae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xl3zvd-ae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:silicon"} {...others} />);
}

export default Component;
