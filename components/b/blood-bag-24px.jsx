import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt-3h5doh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lt-3h5doh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-bag-24px"} {...others} />);
}

export default Component;
