import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2td6fbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u2td6fbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:swiggy"} {...others} />);
}

export default Component;
