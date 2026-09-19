import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb39ecbvy.css';
import '../../css/f/f3eag6bdv.css';
import '../../css/j/jdf9bpbui.css';
import '../../css/x/xi8ki5c4k.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bb39ecbvy"/><path class="f3eag6bdv"/><path class="jdf9bpbui"/><path class="xi8ki5c4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:red-envelope-twotone"} {...others} />);
}

export default Component;
