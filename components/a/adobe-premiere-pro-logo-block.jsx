import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3kr0dbyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k3kr0dbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-premiere-pro-logo-block"} {...others} />);
}

export default Component;
