import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k1a1u2iys.css';
import '../../css/f/fqpqvwf8j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="k1a1u2iys"/><path class="fqpqvwf8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-file-delete-alternate-file-common-delete"} {...others} />);
}

export default Component;
