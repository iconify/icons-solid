import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt4qth8mx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yt4qth8mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:shopping-bag-minus-filled"} {...others} />);
}

export default Component;
