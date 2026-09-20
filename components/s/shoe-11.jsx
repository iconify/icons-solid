import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g67ggebyw.css';
import '../../css/g/geuo8cbkl.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="g67ggebyw"/><path class="geuo8cbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:shoe-11"} {...others} />);
}

export default Component;
