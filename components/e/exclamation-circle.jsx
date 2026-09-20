import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrxlgg64z.css';
import '../../css/i/iu35e1xme.css';
import '../../css/w/wa-7pugao.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="hrxlgg64z"/><circle class="iu35e1xme"/><path class="wa-7pugao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:exclamation-circle"} {...others} />);
}

export default Component;
