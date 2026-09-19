import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9xc2yv0o.css';

const viewBox = {"width":432,"height":512};
const content = `<path class="z9xc2yv0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:book-tag"} {...others} />);
}

export default Component;
