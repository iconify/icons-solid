import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/z/zbvzoqb3z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="zbvzoqb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:exclamation-circle-outlined"} {...others} />);
}

export default Component;
