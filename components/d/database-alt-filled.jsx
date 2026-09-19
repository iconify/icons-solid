import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov3qt0kxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ov3qt0kxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:database-alt-filled"} {...others} />);
}

export default Component;
