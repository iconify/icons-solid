import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux53b_6so.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ux53b_6so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:smiley-drool-solid"} {...others} />);
}

export default Component;
