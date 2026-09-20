import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv1zq6sks.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zv1zq6sks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:uniregistry"} {...others} />);
}

export default Component;
