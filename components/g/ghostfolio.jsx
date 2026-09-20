import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwcuq-bwx.css';
import '../../css/d/dcwqgdbua.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jwcuq-bwx"/><path class="dcwqgdbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ghostfolio"} {...others} />);
}

export default Component;
