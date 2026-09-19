import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b48lj4b-h.css';

const viewBox = {"width":2048,"height":1792};
const content = `<path class="b48lj4b-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:object-group"} {...others} />);
}

export default Component;
