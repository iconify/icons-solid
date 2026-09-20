import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3au2j9yv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3au2j9yv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:starling-bank"} {...others} />);
}

export default Component;
