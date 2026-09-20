import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc2aaw2ht.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vc2aaw2ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:angry-solid"} {...others} />);
}

export default Component;
