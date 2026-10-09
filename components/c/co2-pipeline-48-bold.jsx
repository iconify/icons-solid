import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3xyfn7zl.css';
import '../../css/u/u9tjb0wcp.css';
import '../../css/n/ns0qimb2z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m3xyfn7zl"/><path class="u9tjb0wcp"/><path class="ns0qimb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-pipeline-48-bold"} {...others} />);
}

export default Component;
