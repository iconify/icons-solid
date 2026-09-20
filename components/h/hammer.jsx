import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh-n76h3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oh-n76h3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:hammer"} {...others} />);
}

export default Component;
