import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3aizm_py.css';
import '../../css/q/qeheuacbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3aizm_py"/><path class="qeheuacbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-push-24"} {...others} />);
}

export default Component;
