import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o91i2d-pe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o91i2d-pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:beef-solid"} {...others} />);
}

export default Component;
