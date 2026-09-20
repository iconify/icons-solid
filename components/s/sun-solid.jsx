import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9f9qcklb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9f9qcklb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:sun-solid"} {...others} />);
}

export default Component;
