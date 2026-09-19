import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_a7_nbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a_a7_nbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:file-filled"} {...others} />);
}

export default Component;
