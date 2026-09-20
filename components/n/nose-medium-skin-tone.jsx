import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f--rpx6kf.css';
import '../../css/i/iepr63v6i.css';
import '../../css/k/k5geilbhc.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/jpaag9wfp.css';
import '../../css/w/wr2ltj9ef.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="f--rpx6kf"><path class="iepr63v6i"/><path class="k5geilbhc"/></g><g class="ij2x_72vy"><path class="jpaag9wfp"/><path class="wr2ltj9ef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nose-medium-skin-tone"} {...others} />);
}

export default Component;
