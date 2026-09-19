import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p79y4pbes.css';
import '../../css/l/l7avsacre.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p79y4pbes"/><circle class="l7avsacre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:notification-new"} {...others} />);
}

export default Component;
