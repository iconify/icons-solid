import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utyrl0b0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utyrl0b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:beats-by-dre"} {...others} />);
}

export default Component;
