import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybiv9vb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ybiv9vb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:bell-active"} {...others} />);
}

export default Component;
