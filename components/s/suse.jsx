import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odg1w-btv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="odg1w-btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:suse"} {...others} />);
}

export default Component;
