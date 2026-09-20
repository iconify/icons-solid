import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7mbjn3ee.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="a7mbjn3ee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:painting-board-solid"} {...others} />);
}

export default Component;
