import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsnta9bsn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qsnta9bsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-enabled-pdlc"} {...others} />);
}

export default Component;
