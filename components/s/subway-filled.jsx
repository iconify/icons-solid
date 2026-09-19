import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o36p4fb4z.css';
import '../../css/c/cj_6u2bea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o36p4fb4z"/><path class="cj_6u2bea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:subway-filled"} {...others} />);
}

export default Component;
