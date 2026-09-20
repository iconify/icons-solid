import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv2l60z2l.css';
import '../../css/s/sbpa77b-h.css';
import '../../css/o/onghmnteu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nv2l60z2l"/><path class="sbpa77b-h"/><path class="onghmnteu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:view-eye-off"} {...others} />);
}

export default Component;
