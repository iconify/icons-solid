import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tykflebtg.css';
import '../../css/c/cfkeagz0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tykflebtg"/><path class="cfkeagz0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bell-off-filled"} {...others} />);
}

export default Component;
