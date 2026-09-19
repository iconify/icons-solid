import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szdg7sb9v.css';
import '../../css/i/inw9uqdux.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="szdg7sb9v"/><path class="inw9uqdux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:layer-alt-poi"} {...others} />);
}

export default Component;
