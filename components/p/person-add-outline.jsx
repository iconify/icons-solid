import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz6sozb5l.css';
import '../../css/d/d6s6-cbpf.css';
import '../../css/o/omk86fbup.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hz6sozb5l"/><path class="d6s6-cbpf"/><path class="omk86fbup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:person-add-outline"} {...others} />);
}

export default Component;
