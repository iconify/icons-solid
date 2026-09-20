import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z18488k1e.css';
import '../../css/b/b920nbcec.css';
import '../../css/l/lemmo8spd.css';
import '../../css/l/ln97hhrca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z18488k1e"/><path class="b920nbcec"/><path class="lemmo8spd"/><path class="ln97hhrca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:water-mug-2"} {...others} />);
}

export default Component;
