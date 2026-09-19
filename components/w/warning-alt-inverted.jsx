import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt8z3m2uo.css';
import '../../css/r/r6ujjtbfh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jt8z3m2uo"/><path class="r6ujjtbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:warning-alt-inverted"} {...others} />);
}

export default Component;
