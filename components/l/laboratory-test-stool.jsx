import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzdndrbiv.css';
import '../../css/e/efsxkcctv.css';
import '../../css/j/jnp2sbbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bzdndrbiv"/><path class="efsxkcctv"/><path class="jnp2sbbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:laboratory-test-stool"} {...others} />);
}

export default Component;
