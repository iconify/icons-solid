import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq4svq8ys.css';
import '../../css/r/rbmgisbte.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eq4svq8ys"/><path class="rbmgisbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:buildkite"} {...others} />);
}

export default Component;
