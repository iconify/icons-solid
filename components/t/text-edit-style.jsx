import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un5ari44h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="un5ari44h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-edit-style"} {...others} />);
}

export default Component;
