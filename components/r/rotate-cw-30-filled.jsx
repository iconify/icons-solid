import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_n7dobql.css';
import '../../css/m/m6gu448fr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_n7dobql"/><path class="m6gu448fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rotate-cw-30-filled"} {...others} />);
}

export default Component;
