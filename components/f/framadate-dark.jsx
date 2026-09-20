import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1ozk6l8u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a1ozk6l8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:framadate-dark"} {...others} />);
}

export default Component;
