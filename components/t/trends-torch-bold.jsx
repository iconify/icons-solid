import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfenr6sbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfenr6sbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:trends-torch-bold"} {...others} />);
}

export default Component;
