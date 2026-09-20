import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uejcfd1cs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uejcfd1cs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:end-point-diamond-solid"} {...others} />);
}

export default Component;
