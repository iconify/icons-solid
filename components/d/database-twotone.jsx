import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgeipghhv.css';
import '../../css/n/npf-mpbxr.css';
import '../../css/c/cofxwr0zz.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="kgeipghhv"/><path class="npf-mpbxr"/><path class="cofxwr0zz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:database-twotone"} {...others} />);
}

export default Component;
