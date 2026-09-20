import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js5um8b3a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="js5um8b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:warehouse-1-remix"} {...others} />);
}

export default Component;
