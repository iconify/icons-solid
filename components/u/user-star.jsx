import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nk6kq8uxx.css';
import '../../css/g/ghya2pbow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nk6kq8uxx"/><circle class="ghya2pbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-star"} {...others} />);
}

export default Component;
