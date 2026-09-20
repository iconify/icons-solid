import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a68sv-rsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a68sv-rsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:skeb"} {...others} />);
}

export default Component;
