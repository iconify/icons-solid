import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4xq93bjd.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="e4xq93bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:bluetooth-disabled-remix"} {...others} />);
}

export default Component;
