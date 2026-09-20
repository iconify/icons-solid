import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnsd8h9em.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dnsd8h9em"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pet-paw-flat"} {...others} />);
}

export default Component;
