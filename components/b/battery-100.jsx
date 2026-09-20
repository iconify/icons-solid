import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdr_fsbbb.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="gdr_fsbbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:battery-100"} {...others} />);
}

export default Component;
