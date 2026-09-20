import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvvrx4bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvvrx4bgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:web3dotjs"} {...others} />);
}

export default Component;
