import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx7q22b_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nx7q22b_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:layer-arrow-up"} {...others} />);
}

export default Component;
