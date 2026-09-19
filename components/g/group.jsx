import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aefll9b6q.css';
import '../../css/b/b0mfz3j4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aefll9b6q"/><path class="b0mfz3j4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:group"} {...others} />);
}

export default Component;
