import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/teneazb4x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="teneazb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:balance-scale-left-solid"} {...others} />);
}

export default Component;
