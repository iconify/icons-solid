import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdgw8wb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdgw8wb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:clipboard-document-list"} {...others} />);
}

export default Component;
