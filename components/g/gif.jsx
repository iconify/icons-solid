import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi9pucb8a.css';
import '../../css/s/s08qpzh5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi9pucb8a"/><path clip-rule="evenodd" class="s08qpzh5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:gif"} {...others} />);
}

export default Component;
