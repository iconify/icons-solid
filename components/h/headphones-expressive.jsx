import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6e34ibbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s6e34ibbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:headphones-expressive"} {...others} />);
}

export default Component;
