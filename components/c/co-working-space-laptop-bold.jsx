import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu1bc8bja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yu1bc8bja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:co-working-space-laptop-bold"} {...others} />);
}

export default Component;
