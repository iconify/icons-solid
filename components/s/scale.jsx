import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-jc9896g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q-jc9896g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:scale"} {...others} />);
}

export default Component;
