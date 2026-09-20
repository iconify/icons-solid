import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg4kqqb_d.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="hg4kqqb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:slider-end"} {...others} />);
}

export default Component;
