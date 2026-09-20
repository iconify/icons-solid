import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow53i4btd.css';
import '../../css/j/jz3gn8btg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ow53i4btd"/><path class="jz3gn8btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:virtualbox"} {...others} />);
}

export default Component;
