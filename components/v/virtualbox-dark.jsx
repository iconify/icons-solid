import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8j5c3sho.css';
import '../../css/b/be5fe-z3x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a8j5c3sho"/><path class="be5fe-z3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:virtualbox-dark"} {...others} />);
}

export default Component;
