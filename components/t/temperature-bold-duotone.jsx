import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6rfy3bcu.css';
import '../../css/a/a1b-yfidj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6rfy3bcu"/><path class="a1b-yfidj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:temperature-bold-duotone"} {...others} />);
}

export default Component;
