import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkiqt7bnd.css';
import '../../css/k/k06qbne_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkiqt7bnd"/><path class="k06qbne_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dashboard-2-fill"} {...others} />);
}

export default Component;
