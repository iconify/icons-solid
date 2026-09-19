import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cqteb8bfj.css';
import '../../css/n/ng8wznwvh.css';
import '../../css/e/egtcd9rqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cqteb8bfj"/><path class="ng8wznwvh"/><path class="egtcd9rqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:people-tag"} {...others} />);
}

export default Component;
