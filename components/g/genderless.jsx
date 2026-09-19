import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp-6wrbmb.css';

const viewBox = {"width":288,"height":512};
const content = `<path class="cp-6wrbmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:genderless"} {...others} />);
}

export default Component;
