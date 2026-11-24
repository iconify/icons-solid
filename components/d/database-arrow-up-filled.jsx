import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhdi6ccum.css';
import '../../css/a/ab-wz6bnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhdi6ccum"/><path class="ab-wz6bnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-arrow-up-filled"} {...others} />);
}

export default Component;
