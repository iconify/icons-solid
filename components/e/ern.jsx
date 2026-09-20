import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aid4a4bsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aid4a4bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ern"} {...others} />);
}

export default Component;
