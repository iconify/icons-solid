import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2lf81ben.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n2lf81ben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:sos-sign-bold"} {...others} />);
}

export default Component;
