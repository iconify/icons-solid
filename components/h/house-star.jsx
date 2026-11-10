import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ff0nyrbgo.css';
import '../../css/b/bk2awyw2k.css';
import '../../css/g/gsvrl7yuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ff0nyrbgo"/><path class="bk2awyw2k"/><path class="gsvrl7yuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-star"} {...others} />);
}

export default Component;
