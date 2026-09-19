import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mycp4-b_f.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="fil0 mycp4-b_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:spin6"} {...others} />);
}

export default Component;
