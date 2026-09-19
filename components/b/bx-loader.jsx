import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6xlo2b-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6xlo2b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-loader"} {...others} />);
}

export default Component;
