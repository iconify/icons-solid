import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7p_f2brl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7p_f2brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:book-open-filled"} {...others} />);
}

export default Component;
