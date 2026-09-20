import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n90uq3bfu.css';
import '../../css/j/jyzdacbcc.css';
import '../../css/b/b9-qakbjd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n90uq3bfu"/><path class="jyzdacbcc ouiIcon__fillSecondary"/><path class="b9-qakbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-metricbeat"} {...others} />);
}

export default Component;
