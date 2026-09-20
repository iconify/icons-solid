import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz2z0-b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cz2z0-b-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:exit-fullscreen-circle-filled"} {...others} />);
}

export default Component;
