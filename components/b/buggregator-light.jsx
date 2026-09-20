import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0064doyk.css';
import '../../css/m/m8qdx0f9p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p0064doyk"/><path class="m8qdx0f9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:buggregator-light"} {...others} />);
}

export default Component;
