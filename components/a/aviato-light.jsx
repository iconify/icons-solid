import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9cjbac7h.css';
import '../../css/s/sakiijw5s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n9cjbac7h"/><path class="sakiijw5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aviato-light"} {...others} />);
}

export default Component;
