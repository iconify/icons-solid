import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu5-bn8ab.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="mu5-bn8ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bomb-solid"} {...others} />);
}

export default Component;
