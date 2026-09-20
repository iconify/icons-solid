import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4-wcftdv.css';
import '../../css/x/x4rg6acqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4-wcftdv"/><path clip-rule="evenodd" class="x4rg6acqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ousd"} {...others} />);
}

export default Component;
