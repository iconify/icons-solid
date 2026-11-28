import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za3kuebvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="za3kuebvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:phone-outgoing"} {...others} />);
}

export default Component;
