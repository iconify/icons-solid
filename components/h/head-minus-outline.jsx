import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts3yx7bls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ts3yx7bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:head-minus-outline"} {...others} />);
}

export default Component;
