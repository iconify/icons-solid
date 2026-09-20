import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9hu36b0v.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="v9hu36b0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:map-fold-solid"} {...others} />);
}

export default Component;
