import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk16isbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pk16isbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ethix"} {...others} />);
}

export default Component;
