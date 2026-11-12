import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idolizczw.css';
import '../../css/o/o4_vv21pe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="idolizczw"/><path class="o4_vv21pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:senlo-dark"} {...others} />);
}

export default Component;
