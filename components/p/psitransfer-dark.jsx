import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imws7ob2f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="imws7ob2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:psitransfer-dark"} {...others} />);
}

export default Component;
