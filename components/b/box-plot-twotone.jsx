import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2l-sc8wc.css';
import '../../css/h/hrlvobb8v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="i2l-sc8wc"/><path class="hrlvobb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:box-plot-twotone"} {...others} />);
}

export default Component;
