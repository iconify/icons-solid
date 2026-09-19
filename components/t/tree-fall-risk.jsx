import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nknwp425q.css';
import '../../css/z/zai8nab0m.css';
import '../../css/k/koih2mwpz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nknwp425q"/><path class="zai8nab0m"/><path class="koih2mwpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tree-fall-risk"} {...others} />);
}

export default Component;
