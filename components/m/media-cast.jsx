import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8oaf-6wj.css';
import '../../css/g/g34yiabzj.css';
import '../../css/f/fh7l44ama.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c8oaf-6wj"/><path class="g34yiabzj"/><path class="fh7l44ama"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:media-cast"} {...others} />);
}

export default Component;
