import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nesni0gix.css';

const viewBox = {"width":895,"height":1024};
const content = `<path class="nesni0gix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:simcardthree"} {...others} />);
}

export default Component;
