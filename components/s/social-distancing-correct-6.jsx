import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b0gb9tbuw.css';
import '../../css/a/a36zse7hg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b0gb9tbuw"/><path class="a36zse7hg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-correct-6"} {...others} />);
}

export default Component;
