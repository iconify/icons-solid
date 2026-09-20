import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxti2cc2i.css';
import '../../css/j/j3c-dicsz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qxti2cc2i"/><path class="j3c-dicsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netlock-rmm"} {...others} />);
}

export default Component;
