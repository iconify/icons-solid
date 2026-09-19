import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3j61h5fu.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="b3j61h5fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:indent-more"} {...others} />);
}

export default Component;
