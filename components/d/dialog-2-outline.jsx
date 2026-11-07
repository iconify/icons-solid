import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fidu2rqlh.css';
import '../../css/v/vf2lheb-c.css';
import '../../css/s/syutu7akj.css';
import '../../css/r/r01fs0f5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fidu2rqlh"/><path class="vf2lheb-c"/><path class="syutu7akj"/><path class="r01fs0f5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-2-outline"} {...others} />);
}

export default Component;
