import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6y-4j39f.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="u6y-4j39f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:umbrella"} {...others} />);
}

export default Component;
