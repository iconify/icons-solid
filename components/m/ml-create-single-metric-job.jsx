import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n90uq3bfu.css';
import '../../css/i/i1qy2-bfm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n90uq3bfu"/><path class="i1qy2-bfm ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ml-create-single-metric-job"} {...others} />);
}

export default Component;
