import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m69v3r-fa.css';
import '../../css/m/m0f-csihk.css';
import '../../css/o/o8iczsb-w.css';
import '../../css/a/agdapachy.css';
import '../../css/r/rh9ticcru.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m69v3r-fa"/><path class="m0f-csihk"/><path class="o8iczsb-w"/><path class="agdapachy"/><path class="rh9ticcru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bulldozer-20-bold"} {...others} />);
}

export default Component;
