import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecphvhbrv.css';
import '../../css/b/bzxzk3bln.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ecphvhbrv"/><path class="bzxzk3bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sonatype-nexus-repository"} {...others} />);
}

export default Component;
