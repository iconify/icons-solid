import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skrh6_4wv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="skrh6_4wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mantle"} {...others} />);
}

export default Component;
