import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nke5fhnsv.css';
import '../../css/h/hcg_4bble.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nke5fhnsv"/><path class="hcg_4bble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:earpods-charge"} {...others} />);
}

export default Component;
