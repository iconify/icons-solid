import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5gmkxb2i.css';
import '../../css/m/m_zeiqb1i.css';
import '../../css/b/bqm3pcmff.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z5gmkxb2i"/><path class="m_zeiqb1i"/><path class="bqm3pcmff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:parameter"} {...others} />);
}

export default Component;
