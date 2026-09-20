import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrw7sibnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jrw7sibnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:image-size-select-small"} {...others} />);
}

export default Component;
