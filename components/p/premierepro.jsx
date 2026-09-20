import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_om5egbx.css';
import '../../css/a/aucylab8w.css';
import '../../css/p/pimz7_f2j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="v_om5egbx"/><path class="aucylab8w"/><path class="pimz7_f2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:premierepro"} {...others} />);
}

export default Component;
