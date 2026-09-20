import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scih79b8c.css';
import '../../css/m/me4-nbcbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="scih79b8c"/><path class="me4-nbcbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dcr"} {...others} />);
}

export default Component;
