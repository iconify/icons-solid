import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n90uq3bfu.css';
import '../../css/l/ljkivvbav.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n90uq3bfu"/><path class="ljkivvbav ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-recently-viewed"} {...others} />);
}

export default Component;
