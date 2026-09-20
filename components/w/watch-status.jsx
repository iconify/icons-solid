import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ajm8uqn2u.css';
import '../../css/i/i7qqfq6et.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ajm8uqn2u"/><path class="i7qqfq6et"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:watch-status"} {...others} />);
}

export default Component;
