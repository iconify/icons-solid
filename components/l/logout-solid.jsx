import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4nt_319i.css';
import '../../css/a/ac_y-5bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g4nt_319i"/><path class="ac_y-5bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:logout-solid"} {...others} />);
}

export default Component;
