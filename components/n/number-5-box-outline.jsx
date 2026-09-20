import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh9zi52ew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh9zi52ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:number-5-box-outline"} {...others} />);
}

export default Component;
