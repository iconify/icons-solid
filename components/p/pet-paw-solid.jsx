import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb-db-d4u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tb-db-d4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pet-paw-solid"} {...others} />);
}

export default Component;
