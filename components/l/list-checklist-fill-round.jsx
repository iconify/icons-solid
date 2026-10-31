import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2qkh7b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z2qkh7b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-checklist-fill-round"} {...others} />);
}

export default Component;
