import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1-5z9b-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x1-5z9b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:database-filled"} {...others} />);
}

export default Component;
