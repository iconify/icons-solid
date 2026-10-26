import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zvjbs8b4c.css';
import '../../css/s/s3n559byn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="zvjbs8b4c"/><path class="s3n559byn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:pen"} {...others} />);
}

export default Component;
