import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n78-1ulvi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n78-1ulvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:universal-access-solid"} {...others} />);
}

export default Component;
