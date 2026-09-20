import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtl1ki70z.css';
import '../../css/q/qlpyw3puh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtl1ki70z"/><path class="qlpyw3puh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-file-xls-bold"} {...others} />);
}

export default Component;
