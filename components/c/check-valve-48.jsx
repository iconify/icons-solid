import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c716qmbny.css';
import '../../css/c/cr5l2wclf.css';
import '../../css/e/eqjqtguyx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c716qmbny"/><path class="cr5l2wclf"/><path class="eqjqtguyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:check-valve-48"} {...others} />);
}

export default Component;
