import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_t-wqbiv.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6.5};
const content = `<path class="u_t-wqbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:deezer"} {...others} />);
}

export default Component;
