import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2m2g7b5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a2m2g7b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-text-outline"} {...others} />);
}

export default Component;
