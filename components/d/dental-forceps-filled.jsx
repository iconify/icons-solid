import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz2mxftjw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gz2mxftjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:dental-forceps-filled"} {...others} />);
}

export default Component;
