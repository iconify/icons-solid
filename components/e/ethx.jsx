import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1ycc83rv.css';
import '../../css/r/r2xj4w28y.css';
import '../../css/t/t4hr1zepd.css';
import '../../css/k/kyl08dl-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1ycc83rv"/><path class="r2xj4w28y"/><path class="t4hr1zepd"/><path class="kyl08dl-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ethx"} {...others} />);
}

export default Component;
