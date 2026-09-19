import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay4scmbps.css';
import '../../css/f/fave5fbdz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ay4scmbps"/><path class="fave5fbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-private-path-services"} {...others} />);
}

export default Component;
