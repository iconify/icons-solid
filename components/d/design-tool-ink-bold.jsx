import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpk8_q57l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bpk8_q57l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-tool-ink-bold"} {...others} />);
}

export default Component;
