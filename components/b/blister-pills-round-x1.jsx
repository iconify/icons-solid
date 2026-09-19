import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myb6k18tj.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="myb6k18tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blister-pills-round-x1"} {...others} />);
}

export default Component;
