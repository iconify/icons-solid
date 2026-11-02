import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm5l7hf7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hm5l7hf7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:gumroad-fill"} {...others} />);
}

export default Component;
