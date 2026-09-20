import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-eljtb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-eljtb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:octagon-plus-filled"} {...others} />);
}

export default Component;
