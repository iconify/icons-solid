import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ary60mj0w.css';
import '../../css/f/fk-8gjbyw.css';
import '../../css/j/j14em3y7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ary60mj0w"/><path class="fk-8gjbyw"/><path class="j14em3y7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-snow-filled"} {...others} />);
}

export default Component;
