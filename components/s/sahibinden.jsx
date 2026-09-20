import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acd9dhh2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="acd9dhh2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sahibinden"} {...others} />);
}

export default Component;
