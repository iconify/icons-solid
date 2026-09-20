import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dykvwujvw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dykvwujvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-standing-wearing-dress-beside-child-standing-beside-broadshouldered-person-standing"} {...others} />);
}

export default Component;
