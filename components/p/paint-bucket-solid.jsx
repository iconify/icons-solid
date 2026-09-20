import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi91kyoxc.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="yi91kyoxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:paint-bucket-solid"} {...others} />);
}

export default Component;
