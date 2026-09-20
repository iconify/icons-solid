import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hupxt07cu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hupxt07cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:business-lucky-cat-bold"} {...others} />);
}

export default Component;
