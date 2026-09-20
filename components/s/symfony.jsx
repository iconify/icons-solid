import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5rqf2bpo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z5rqf2bpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:symfony"} {...others} />);
}

export default Component;
