import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbirz4byx.css';
import '../../css/c/c9buwng5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mbirz4byx"/><path class="c9buwng5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-plus"} {...others} />);
}

export default Component;
