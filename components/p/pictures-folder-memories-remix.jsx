import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmg0r4s3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vmg0r4s3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pictures-folder-memories-remix"} {...others} />);
}

export default Component;
