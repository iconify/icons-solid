import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfbo3h2tc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfbo3h2tc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:fingerprint-x"} {...others} />);
}

export default Component;
