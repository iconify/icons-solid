import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bijngw2ra.css';
import '../../css/b/b5_vewwzn.css';
import '../../css/s/s38cgmg8p.css';
import '../../css/x/xi4f7vbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bijngw2ra"/><path clip-rule="evenodd" class="b5_vewwzn"/><path class="s38cgmg8p"/><path class="xi4f7vbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:article-sparkle"} {...others} />);
}

export default Component;
