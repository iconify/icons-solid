import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oct_aobqd.css';
import '../../css/i/i-8vw9hdb.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="oct_aobqd"/><path class="i-8vw9hdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:atlas-network-light"} {...others} />);
}

export default Component;
