import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq6y9ctxn.css';
import '../../css/n/nazq8_bnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gq6y9ctxn"/><path class="nazq8_bnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:copy-check-bold"} {...others} />);
}

export default Component;
