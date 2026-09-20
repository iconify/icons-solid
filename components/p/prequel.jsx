import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl1cnobzu.css';
import '../../css/q/qgzh5-i-h.css';
import '../../css/o/ozav58bde.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fl1cnobzu"/><circle class="qgzh5-i-h"/><circle class="ozav58bde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:prequel"} {...others} />);
}

export default Component;
