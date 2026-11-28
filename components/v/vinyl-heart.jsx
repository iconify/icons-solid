import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkle8ob3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkle8ob3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:vinyl-heart"} {...others} />);
}

export default Component;
