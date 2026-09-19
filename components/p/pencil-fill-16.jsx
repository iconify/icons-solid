import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag5e9zx_f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ag5e9zx_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pencil-fill-16"} {...others} />);
}

export default Component;
