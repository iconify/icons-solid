import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkryll1rk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkryll1rk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:accesible-restroom"} {...others} />);
}

export default Component;
