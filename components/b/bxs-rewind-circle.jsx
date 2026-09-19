import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_4z2nb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_4z2nb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-rewind-circle"} {...others} />);
}

export default Component;
