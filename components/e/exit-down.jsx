import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4oopynuy.css';
import '../../css/s/sm5_fqxyr.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="p4oopynuy"/><path class="sm5_fqxyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:exit-down"} {...others} />);
}

export default Component;
