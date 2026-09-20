import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-4zy2gfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f-4zy2gfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-error-filled"} {...others} />);
}

export default Component;
