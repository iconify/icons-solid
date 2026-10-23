import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfto5zudc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mfto5zudc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:vector-polygon"} {...others} />);
}

export default Component;
