import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-m7aobza.css';
import '../../css/f/fldmn0cpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b o-m7aobza"/><path class="b fldmn0cpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:education-filled"} {...others} />);
}

export default Component;
