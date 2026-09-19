import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k20av7rgb.css';
import '../../css/h/hzik1vb6f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k20av7rgb"/><path class="hzik1vb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:snow-density"} {...others} />);
}

export default Component;
