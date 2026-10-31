import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8dybub9u.css';
import '../../css/u/utquofbms.css';
import '../../css/z/zbsqqabff.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="e8dybub9u"/><path class="utquofbms"/><path class="zbsqqabff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:kosovo"} {...others} />);
}

export default Component;
