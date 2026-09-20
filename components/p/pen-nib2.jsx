import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ehd4vwnqj.css';
import '../../css/j/j9ayin83g.css';
import '../../css/o/oskz19bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ehd4vwnqj"/><path class="j9ayin83g"/><path class="oskz19bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen-nib2"} {...others} />);
}

export default Component;
