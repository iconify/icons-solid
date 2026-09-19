import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o20vhit8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o20vhit8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:file-minus-filled"} {...others} />);
}

export default Component;
