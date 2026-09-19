import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/ue237nbww.css';
import '../../css/c/c50uhqblm.css';
import '../../css/j/j7gjjlbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="ue237nbww"/><path class="c50uhqblm"/><path class="j7gjjlbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-circle-thin"} {...others} />);
}

export default Component;
