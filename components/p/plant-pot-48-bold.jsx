import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qexqz9xeo.css';
import '../../css/t/tah-fgebz.css';
import '../../css/s/sdxauxb2f.css';
import '../../css/k/k06btxh_g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qexqz9xeo"/><path class="tah-fgebz"/><path class="sdxauxb2f"/><path class="k06btxh_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plant-pot-48-bold"} {...others} />);
}

export default Component;
