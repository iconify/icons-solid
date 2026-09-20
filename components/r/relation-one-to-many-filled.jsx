import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s91_41oli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s91_41oli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:relation-one-to-many-filled"} {...others} />);
}

export default Component;
