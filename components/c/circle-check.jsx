import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dip7kslof.css';
import '../../css/t/t55-6mljh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dip7kslof"/><path class="t55-6mljh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-check"} {...others} />);
}

export default Component;
