import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uc0yydbxj.css';
import '../../css/t/tcutiwbel.css';
import '../../css/r/racfkwbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uc0yydbxj"/><path class="tcutiwbel"/><path class="racfkwbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:briefcase5-filled"} {...others} />);
}

export default Component;
