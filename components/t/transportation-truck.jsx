import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9xke1qvt.css';
import '../../css/u/u71vq3b-a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="u9xke1qvt"/><path class="u71vq3b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:transportation-truck"} {...others} />);
}

export default Component;
