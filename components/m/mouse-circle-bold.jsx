import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erffp9gdb.css';
import '../../css/p/po0a-cbct.css';
import '../../css/i/iwn52hiur.css';
import '../../css/d/dqz994vkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="erffp9gdb"/><path class="po0a-cbct"/><path class="iwn52hiur"/><path class="dqz994vkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-circle-bold"} {...others} />);
}

export default Component;
