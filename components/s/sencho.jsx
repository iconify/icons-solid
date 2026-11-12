import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wip7tqmxf.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="bc1fd0lxe"/><path class="wip7tqmxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sencho"} {...others} />);
}

export default Component;
