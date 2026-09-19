import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvatpob0r.css';
import '../../css/g/g9wb33bax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvatpob0r"/><path class="g9wb33bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:layers-minus-alt-filled"} {...others} />);
}

export default Component;
