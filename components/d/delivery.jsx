import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzab02bem.css';
import '../../css/r/rl2fx36gi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dzab02bem"/><path class="rl2fx36gi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:delivery"} {...others} />);
}

export default Component;
