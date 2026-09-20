import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa47n1b8j.css';
import '../../css/f/fkrgg3o2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pa47n1b8j"/><path class="fkrgg3o2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-lightroom"} {...others} />);
}

export default Component;
