import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfl8bdbyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfl8bdbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:sd-card-x"} {...others} />);
}

export default Component;
