import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_r4d6d1t.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="z_r4d6d1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:alert-hexagon-fill"} {...others} />);
}

export default Component;
