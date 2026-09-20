import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdz5_tljs.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="hdz5_tljs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:prescription-pills-drugs-healthcare-solid"} {...others} />);
}

export default Component;
