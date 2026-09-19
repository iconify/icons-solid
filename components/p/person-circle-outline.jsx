import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfdi-4buo.css';
import '../../css/t/tk4wqivch.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qfdi-4buo"/><path class="tk4wqivch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:person-circle-outline"} {...others} />);
}

export default Component;
