import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7aq6nb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o7aq6nb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:slash-square-filled"} {...others} />);
}

export default Component;
