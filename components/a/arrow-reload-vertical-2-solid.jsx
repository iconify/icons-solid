import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw9lf_b3c.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="aw9lf_b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-reload-vertical-2-solid"} {...others} />);
}

export default Component;
