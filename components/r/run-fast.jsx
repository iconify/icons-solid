import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oby2hmzeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oby2hmzeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:run-fast"} {...others} />);
}

export default Component;
