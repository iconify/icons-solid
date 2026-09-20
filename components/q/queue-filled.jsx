import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqb2gq5et.css';
import '../../css/o/o89-xrb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pqb2gq5et"/><path class="o89-xrb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:queue-filled"} {...others} />);
}

export default Component;
