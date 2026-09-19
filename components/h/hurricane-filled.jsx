import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fme7b6pkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fme7b6pkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:hurricane-filled"} {...others} />);
}

export default Component;
