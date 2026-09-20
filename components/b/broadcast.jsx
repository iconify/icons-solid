import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umylk03ca.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="umylk03ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:broadcast"} {...others} />);
}

export default Component;
