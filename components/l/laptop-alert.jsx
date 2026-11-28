import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk51uq80h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tk51uq80h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:laptop-alert"} {...others} />);
}

export default Component;
