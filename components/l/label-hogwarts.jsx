import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9ywuf_1t.css';

const viewBox = {"width":352,"height":512};
const content = `<path class="v9ywuf_1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:label-hogwarts"} {...others} />);
}

export default Component;
