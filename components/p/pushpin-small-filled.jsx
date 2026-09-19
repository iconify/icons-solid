import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms8pr2b8c.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ms8pr2b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:pushpin-small-filled"} {...others} />);
}

export default Component;
