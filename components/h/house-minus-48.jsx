import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcse7wsih.css';
import '../../css/k/kdbvn80vp.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kcse7wsih"/><path class="kdbvn80vp"/><path class="kem81wb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-minus-48"} {...others} />);
}

export default Component;
