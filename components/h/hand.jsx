import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p680rwbug.css';
import '../../css/p/pgldy5bla.css';
import '../../css/d/d2xewfbqe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p680rwbug"/><path class="pgldy5bla"/><path class="d2xewfbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand"} {...others} />);
}

export default Component;
