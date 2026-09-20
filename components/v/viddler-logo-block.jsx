import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iurr2qbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iurr2qbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:viddler-logo-block"} {...others} />);
}

export default Component;
