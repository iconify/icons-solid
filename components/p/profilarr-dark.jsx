import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk1ci18po.css';
import '../../css/j/jwjgdy4tv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mk1ci18po"/><path class="jwjgdy4tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:profilarr-dark"} {...others} />);
}

export default Component;
