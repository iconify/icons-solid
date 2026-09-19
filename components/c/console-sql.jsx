import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_qcc4bjy.css';
import '../../css/s/s2u7zvnem.css';
import '../../css/w/w13sax6_i.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="b_qcc4bjy"/><path class="s2u7zvnem"/><path class="w13sax6_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:console-sql"} {...others} />);
}

export default Component;
