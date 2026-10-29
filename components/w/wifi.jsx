import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvk2mbcwh.css';
import '../../css/e/egyf9jbvi.css';
import '../../css/g/gs45f_bze.css';
import '../../css/i/icly_ob1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvk2mbcwh"/><path class="egyf9jbvi"/><path class="gs45f_bze"/><path class="icly_ob1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wifi"} {...others} />);
}

export default Component;
