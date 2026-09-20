import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c57dn841e.css';
import '../../css/z/z31349b3z.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="c57dn841e"/><path class="z31349b3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:image-document-solid"} {...others} />);
}

export default Component;
