import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjpjj7bux.css';
import '../../css/f/fa8ycbb8q.css';
import '../../css/e/epesvsbmv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bjpjj7bux"/><path class="fa8ycbb8q"/><path class="epesvsbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:post-office-48-bold"} {...others} />);
}

export default Component;
