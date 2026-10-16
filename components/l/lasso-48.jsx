import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-7g8zgze.css';
import '../../css/c/ca_dbzwra.css';
import '../../css/e/evhwq2bos.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c-7g8zgze"/><path class="ca_dbzwra"/><path class="evhwq2bos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lasso-48"} {...others} />);
}

export default Component;
