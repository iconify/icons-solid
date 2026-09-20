import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1_pa5mmp.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="g1_pa5mmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:toilet-women-solid"} {...others} />);
}

export default Component;
