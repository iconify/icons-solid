import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axa1u9_az.css';
import '../../css/o/o8wjvtbjz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="axa1u9_az"/><path class="o8wjvtbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-pass-dark"} {...others} />);
}

export default Component;
