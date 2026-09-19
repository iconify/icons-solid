import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4sd0g1go.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="k4sd0g1go"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:test-tube-alt"} {...others} />);
}

export default Component;
