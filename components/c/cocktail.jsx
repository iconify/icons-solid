import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8f9nkjjf.css';
import '../../css/p/p86a-ebep.css';
import '../../css/c/cuuwd-bug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y8f9nkjjf"/><path class="p86a-ebep"/><path class="cuuwd-bug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cocktail"} {...others} />);
}

export default Component;
