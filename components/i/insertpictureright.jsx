import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxo7lob4z.css';

const viewBox = {"width":1025,"height":960};
const content = `<path class="xxo7lob4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:insertpictureright"} {...others} />);
}

export default Component;
