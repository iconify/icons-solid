import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1hgb6bzy.css';
import '../../css/f/fj3ryr4ly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b1hgb6bzy"/><path class="fj3ryr4ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:swimming-fill"} {...others} />);
}

export default Component;
