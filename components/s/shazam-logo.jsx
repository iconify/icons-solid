import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x6wq2bcno.css';
import '../../css/l/loubjdbwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="y9tr6bcfx"><path class="x6wq2bcno"/><path class="loubjdbwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:shazam-logo"} {...others} />);
}

export default Component;
