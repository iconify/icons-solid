import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oapkbfbos.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oapkbfbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:dice-6-solid"} {...others} />);
}

export default Component;
