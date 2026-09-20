import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8owapquf.css';
import '../../css/n/n5dg8triv.css';
import '../../css/l/lz13cdsdt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d8owapquf"/><path class="n5dg8triv"/><path class="lz13cdsdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:the-verge-dark"} {...others} />);
}

export default Component;
