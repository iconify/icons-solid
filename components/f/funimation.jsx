import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6jl-3b4w.css';

const viewBox = {"width":612,"height":90.8,"top":350.6};
const content = `<path class="f6jl-3b4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:funimation"} {...others} />);
}

export default Component;
