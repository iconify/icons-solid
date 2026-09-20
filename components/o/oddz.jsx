import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0tyl5b3k.css';
import '../../css/f/fs0iosbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0tyl5b3k"/><path class="fs0iosbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:oddz"} {...others} />);
}

export default Component;
