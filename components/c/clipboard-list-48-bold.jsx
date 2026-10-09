import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adm1b9bzj.css';
import '../../css/u/u46oqbc7a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="adm1b9bzj"/><path class="u46oqbc7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-list-48-bold"} {...others} />);
}

export default Component;
