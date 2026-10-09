import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhixubcci.css';
import '../../css/b/b98id3jfi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nhixubcci"/><path class="b98id3jfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:relay-20"} {...others} />);
}

export default Component;
