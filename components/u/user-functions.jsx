import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhpoww2ff.css';
import '../../css/a/a3v1qp52j.css';
import '../../css/t/tf-eykfuu.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="fhpoww2ff"/><path class="a3v1qp52j"/><path class="tf-eykfuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:user-functions"} {...others} />);
}

export default Component;
