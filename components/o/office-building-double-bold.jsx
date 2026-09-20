import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8zxzuo8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q8zxzuo8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-building-double-bold"} {...others} />);
}

export default Component;
