import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is5b7bcod.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="is5b7bcod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:key-alt-fill"} {...others} />);
}

export default Component;
