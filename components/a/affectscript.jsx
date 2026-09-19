import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm4n88bcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="lm4n88bcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:affectscript"} {...others} />);
}

export default Component;
