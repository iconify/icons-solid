import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/seoan67mj.css';
import '../../css/f/fkqzxuyie.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="seoan67mj"/><path class="fkqzxuyie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scope-2-48-bold"} {...others} />);
}

export default Component;
