import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9xwewb7q.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="n9xwewb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:store-alt-slash"} {...others} />);
}

export default Component;
