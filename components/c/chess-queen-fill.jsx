import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8dbjrn2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8dbjrn2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chess-queen-fill"} {...others} />);
}

export default Component;
