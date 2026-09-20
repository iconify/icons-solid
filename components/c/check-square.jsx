import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkzbi_b2t.css';
import '../../css/k/ki5l85g2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkzbi_b2t"/><path class="ki5l85g2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:check-square"} {...others} />);
}

export default Component;
