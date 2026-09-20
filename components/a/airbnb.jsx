import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2u9n_9xw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i2u9n_9xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:airbnb"} {...others} />);
}

export default Component;
