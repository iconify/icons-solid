import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_1_4bc4b.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d_1_4bc4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:projector-screen-solid"} {...others} />);
}

export default Component;
