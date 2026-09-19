import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3bhmacip.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="x3bhmacip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:sex-male"} {...others} />);
}

export default Component;
