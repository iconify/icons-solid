import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3bu2f_4i.css';
import '../../css/k/kl4oqnb3v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="d3bu2f_4i"/><path class="kl4oqnb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:cloud-sync"} {...others} />);
}

export default Component;
