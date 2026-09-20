import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p426blhfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p426blhfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:select-multiple-marker"} {...others} />);
}

export default Component;
