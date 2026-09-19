import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp4qn76os.css';
import '../../css/d/dbrmuibkq.css';
import '../../css/d/ddosorbiw.css';
import '../../css/i/ibh-7xb0i.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dp4qn76os"/><path clip-rule="evenodd" class="dbrmuibkq"/><path class="ddosorbiw"/><path clip-rule="evenodd" class="ibh-7xb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:uz"} {...others} />);
}

export default Component;
