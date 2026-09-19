import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii_t20l9f.css';

const viewBox = {"width":524,"height":735};
const content = `<path class="ii_t20l9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:y-upper-case"} {...others} />);
}

export default Component;
