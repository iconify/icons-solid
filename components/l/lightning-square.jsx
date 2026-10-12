import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4os3wrnp.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/r/r4wxbzatl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h4os3wrnp"/><rect transform="rotate(90 0 21.58)scale(-1 1)" class="fpuyb9bst"/><path class="r4wxbzatl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lightning-square"} {...others} />);
}

export default Component;
