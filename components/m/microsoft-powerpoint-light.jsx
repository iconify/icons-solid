import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzhi-ac4k.css';
import '../../css/c/ck99yo6hz.css';
import '../../css/g/gqyaulbpw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yzhi-ac4k"/><path class="ck99yo6hz"/><path class="gqyaulbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-powerpoint-light"} {...others} />);
}

export default Component;
