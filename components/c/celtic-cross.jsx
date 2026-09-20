import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucdh_db4k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ucdh_db4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:celtic-cross"} {...others} />);
}

export default Component;
