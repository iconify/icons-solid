import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odz7kjb9u.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="odz7kjb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:caret-left"} {...others} />);
}

export default Component;
