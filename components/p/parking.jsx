import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0t22yxla.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z0t22yxla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:parking"} {...others} />);
}

export default Component;
