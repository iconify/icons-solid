import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk06r_61c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hk06r_61c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:map-marked-alt-solid"} {...others} />);
}

export default Component;
