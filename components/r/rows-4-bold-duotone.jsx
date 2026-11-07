import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nayqy1c_r.css';
import '../../css/v/vebkkh5gh.css';
import '../../css/f/fo8dlab0r.css';
import '../../css/d/d6c-fzbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nayqy1c_r"/><path class="vebkkh5gh"/><path class="fo8dlab0r"/><path class="d6c-fzbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-4-bold-duotone"} {...others} />);
}

export default Component;
