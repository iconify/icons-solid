import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnh9jo49l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vnh9jo49l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:search-minus"} {...others} />);
}

export default Component;
