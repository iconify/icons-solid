import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9czz4bal.css';
import '../../css/k/kpj7x2bvw.css';
import '../../css/g/gy9jckxha.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d9czz4bal"/><path class="kpj7x2bvw"/><path class="gy9jckxha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-home-48"} {...others} />);
}

export default Component;
