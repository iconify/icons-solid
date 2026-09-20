import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln0831wbk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ln0831wbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-standing-wearing-dress-beside-broadshouldered-person-standing"} {...others} />);
}

export default Component;
