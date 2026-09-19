import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giek2mg0i.css';
import '../../css/g/gw53p_brw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="giek2mg0i"/><path class="gw53p_brw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:system-ok-outlined"} {...others} />);
}

export default Component;
