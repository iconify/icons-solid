import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwerzcbov.css';
import '../../css/n/n4xd9jpho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwerzcbov"/><path class="n4xd9jpho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hez"} {...others} />);
}

export default Component;
