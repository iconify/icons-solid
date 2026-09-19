import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/z/z6352vb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="tcwe4ewrv"/><path class="z6352vb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pin-location-02"} {...others} />);
}

export default Component;
