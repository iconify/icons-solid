import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj7fhcc0y.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="dj7fhcc0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circleleft"} {...others} />);
}

export default Component;
