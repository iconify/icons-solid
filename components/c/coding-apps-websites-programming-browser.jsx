import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwd16lvwe.css';
import '../../css/a/a7b1h8b_y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bwd16lvwe"/><path class="a7b1h8b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-programming-browser"} {...others} />);
}

export default Component;
