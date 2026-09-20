import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb87fub2m.css';
import '../../css/i/igrgcsw-i.css';
import '../../css/a/ak8i1tnjp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nb87fub2m"/><path class="igrgcsw-i"/><path class="ak8i1tnjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netgear-dark"} {...others} />);
}

export default Component;
