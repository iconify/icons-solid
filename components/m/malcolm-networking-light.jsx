import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un5ao3bqg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="un5ao3bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:malcolm-networking-light"} {...others} />);
}

export default Component;
