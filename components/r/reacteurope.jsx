import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3nfk9boy.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="h3nfk9boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:reacteurope"} {...others} />);
}

export default Component;
