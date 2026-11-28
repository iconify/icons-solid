import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghv0-2b_a.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ghv0-2b_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bring-to-front-bold"} {...others} />);
}

export default Component;
