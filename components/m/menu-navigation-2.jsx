import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1sveoo-n.css';
import '../../css/e/eqoj_abpk.css';
import '../../css/r/r7kgrqbog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1sveoo-n"/><path class="eqoj_abpk"/><path class="r7kgrqbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:menu-navigation-2"} {...others} />);
}

export default Component;
