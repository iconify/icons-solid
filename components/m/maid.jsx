import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zjpjbki-t.css';
import '../../css/b/b53ts9b6i.css';
import '../../css/f/fvk21rbzp.css';
import '../../css/u/u4c30j0ef.css';
import '../../css/p/p1p-v4bmj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="zjpjbki-t"/><g class="b53ts9b6i"><path class="fvk21rbzp"/><path class="u4c30j0ef"/><path class="p1p-v4bmj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:maid"} {...others} />);
}

export default Component;
