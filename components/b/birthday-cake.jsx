import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/papf5x-vm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="papf5x-vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:birthday-cake"} {...others} />);
}

export default Component;
