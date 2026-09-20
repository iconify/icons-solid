import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb2cbhbmy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bb2cbhbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:new-folder-solid"} {...others} />);
}

export default Component;
