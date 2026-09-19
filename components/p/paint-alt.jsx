import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf6rg8q0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jf6rg8q0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:paint-alt"} {...others} />);
}

export default Component;
