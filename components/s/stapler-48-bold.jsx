import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6kypr36l.css';
import '../../css/u/urso02caa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b6kypr36l"/><path class="urso02caa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stapler-48-bold"} {...others} />);
}

export default Component;
