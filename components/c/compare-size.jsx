import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfe-3o5hh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfe-3o5hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:compare-size"} {...others} />);
}

export default Component;
