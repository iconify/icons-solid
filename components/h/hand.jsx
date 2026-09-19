import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlwu5xw6o.css';

const viewBox = {"width":304,"height":496};
const content = `<path class="vlwu5xw6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:hand"} {...others} />);
}

export default Component;
