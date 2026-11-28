import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j043xib2y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1lla06nf.css';
import '../../css/k/kyqmb2bam.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j043xib2y secondary"/><g class="dt0cm9dhy primary"><path class="m1lla06nf"/><path class="kyqmb2bam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shell-duo"} {...others} />);
}

export default Component;
