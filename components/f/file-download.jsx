import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1jueep_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s1jueep_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:file-download"} {...others} />);
}

export default Component;
