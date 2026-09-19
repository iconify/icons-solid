import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me8xx5esy.css';
import '../../css/y/yyqg3mbar.css';
import '../../css/o/oh2rpjbhq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="me8xx5esy"/><path class="yyqg3mbar"/><path class="oh2rpjbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bowtie"} {...others} />);
}

export default Component;
