import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye9hi3bxu.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ye9hi3bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:alert-box-fill"} {...others} />);
}

export default Component;
