import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q76t3tg9g.css';
import '../../css/j/jmypdibrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q76t3tg9g"/><path class="jmypdibrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-branch-fill"} {...others} />);
}

export default Component;
