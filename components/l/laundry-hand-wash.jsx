import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnkwirboe.css';
import '../../css/b/blf1u3bly.css';
import '../../css/n/n78mm0b9y.css';
import '../../css/e/e586vbbsn.css';
import '../../css/o/ojvxcabbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cnkwirboe"/><path class="blf1u3bly"/><path class="n78mm0b9y"/><path class="e586vbbsn"/><path class="ojvxcabbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:laundry-hand-wash"} {...others} />);
}

export default Component;
