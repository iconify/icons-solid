import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt94vufyl.css';
import '../../css/e/e_hujhb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kt94vufyl"/><rect class="e_hujhb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:margin-right-filled"} {...others} />);
}

export default Component;
