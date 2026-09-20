import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny1r5jixv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ny1r5jixv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:sort-amount-up-alt"} {...others} />);
}

export default Component;
