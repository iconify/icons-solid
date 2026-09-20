import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhji1fb4p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qhji1fb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:dochub"} {...others} />);
}

export default Component;
