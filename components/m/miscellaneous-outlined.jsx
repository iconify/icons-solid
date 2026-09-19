import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu674cbqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tu674cbqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:miscellaneous-outlined"} {...others} />);
}

export default Component;
