import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9j6r52xi.css';
import '../../css/c/c-cig4bdd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f9j6r52xi"/><path class="c-cig4bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-loop-left-filled"} {...others} />);
}

export default Component;
