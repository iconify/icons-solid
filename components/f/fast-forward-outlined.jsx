import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4by67b4g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="b4by67b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:fast-forward-outlined"} {...others} />);
}

export default Component;
