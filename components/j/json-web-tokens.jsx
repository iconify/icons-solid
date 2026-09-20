import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o95gjl2no.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o95gjl2no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:json-web-tokens"} {...others} />);
}

export default Component;
