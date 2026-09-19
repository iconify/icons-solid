import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8-9vtl6c.css';
import '../../css/n/ng73f_8fh.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="c8-9vtl6c"/><path class="ng73f_8fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-favorite"} {...others} />);
}

export default Component;
