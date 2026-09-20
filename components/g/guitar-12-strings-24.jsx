import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzqwesb-r.css';
import '../../css/z/zfqaiv0hs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzqwesb-r"/><path class="zfqaiv0hs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:guitar-12-strings-24"} {...others} />);
}

export default Component;
