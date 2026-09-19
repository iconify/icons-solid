import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr8u1glpl.css';
import '../../css/h/h4erxx0-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yr8u1glpl"/><path class="h4erxx0-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-algolia"} {...others} />);
}

export default Component;
