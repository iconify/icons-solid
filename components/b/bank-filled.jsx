import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jem20x6hs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jem20x6hs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:bank-filled"} {...others} />);
}

export default Component;
