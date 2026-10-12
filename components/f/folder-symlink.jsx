import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu8nad1hp.css';
import '../../css/v/v9imsxm7v.css';
import '../../css/j/jsl-hczry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bu8nad1hp"/><path class="v9imsxm7v"/><path class="jsl-hczry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-symlink"} {...others} />);
}

export default Component;
