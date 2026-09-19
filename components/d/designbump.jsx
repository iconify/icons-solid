import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0thd4b-f.css';

const viewBox = {"width":360,"height":488};
const content = `<path class="r0thd4b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:designbump"} {...others} />);
}

export default Component;
