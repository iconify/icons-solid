import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwpdi1b3t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uwpdi1b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:mobile-phone-fill-20"} {...others} />);
}

export default Component;
