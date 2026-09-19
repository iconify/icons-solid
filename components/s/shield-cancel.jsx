import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b__u3zbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b__u3zbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:shield-cancel"} {...others} />);
}

export default Component;
