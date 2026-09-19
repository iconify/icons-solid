import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l79ay0y_t.css';

const viewBox = {"width":528,"height":448};
const content = `<path class="l79ay0y_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:70-160"} {...others} />);
}

export default Component;
