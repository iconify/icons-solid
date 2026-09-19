import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0tt1ib_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v0tt1ib_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:quote-right-alt-filled"} {...others} />);
}

export default Component;
