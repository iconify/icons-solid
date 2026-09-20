import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyiq52k8l.css';
import '../../css/m/m1abqtscw.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="hyiq52k8l"/><path class="m1abqtscw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:mashroom"} {...others} />);
}

export default Component;
