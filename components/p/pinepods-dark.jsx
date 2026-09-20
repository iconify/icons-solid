import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc50gibdd.css';
import '../../css/v/v691k0tbi.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="rc50gibdd"/><path clip-rule="evenodd" class="v691k0tbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pinepods-dark"} {...others} />);
}

export default Component;
