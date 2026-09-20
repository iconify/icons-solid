import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iycln-b8i.css';
import '../../css/a/art3-jbxi.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="iycln-b8i"/><path class="art3-jbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pocket-id"} {...others} />);
}

export default Component;
