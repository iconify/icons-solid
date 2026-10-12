import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta5f1hbwd.css';
import '../../css/u/une-91bkz.css';
import '../../css/g/gk5hfuifs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ta5f1hbwd"/><path class="une-91bkz"/><path class="gk5hfuifs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ladybird-48-bold"} {...others} />);
}

export default Component;
