import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm5pvq32z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mm5pvq32z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:firefox"} {...others} />);
}

export default Component;
