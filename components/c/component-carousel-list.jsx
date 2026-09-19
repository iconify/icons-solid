import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4sxbkezq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p4sxbkezq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:component-carousel-list"} {...others} />);
}

export default Component;
