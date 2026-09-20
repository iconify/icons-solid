import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pht-9fylt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pht-9fylt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:eye-slash"} {...others} />);
}

export default Component;
