import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq1yx56sg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rq1yx56sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-filled"} {...others} />);
}

export default Component;
