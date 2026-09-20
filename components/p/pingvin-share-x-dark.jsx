import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td9bw8nuj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="td9bw8nuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pingvin-share-x-dark"} {...others} />);
}

export default Component;
