import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uodgz0val.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uodgz0val"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:iq-logo-2-block"} {...others} />);
}

export default Component;
