import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6uey3bcg.css';
import '../../css/e/ez71_mloi.css';
import '../../css/s/sauhagb7x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t6uey3bcg"/><path class="ez71_mloi"/><path class="sauhagb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydraulic-press-48-bold"} {...others} />);
}

export default Component;
