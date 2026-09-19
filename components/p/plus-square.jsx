import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jor-usn7v.css';
import '../../css/e/e78vbih2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jor-usn7v"/><path class="e78vbih2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:plus-square"} {...others} />);
}

export default Component;
