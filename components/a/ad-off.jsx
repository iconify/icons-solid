import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1obo4lqw.css';
import '../../css/s/slrc8sbeo.css';
import '../../css/o/ol3o9dvhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a1obo4lqw"/><rect class="slrc8sbeo"/><path class="ol3o9dvhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ad-off"} {...others} />);
}

export default Component;
