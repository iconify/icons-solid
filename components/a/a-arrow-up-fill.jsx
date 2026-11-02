import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeljpqb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qeljpqb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:a-arrow-up-fill"} {...others} />);
}

export default Component;
