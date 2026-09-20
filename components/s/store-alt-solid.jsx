import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie-qqtb5y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ie-qqtb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:store-alt-solid"} {...others} />);
}

export default Component;
