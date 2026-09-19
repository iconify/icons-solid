import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx1pw_-qf.css';
import '../../css/g/g5xqtsbzl.css';

const viewBox = {"width":32,"height":32};
const content = `<defs><path id="SVGmEns5cJB" class="nx1pw_-qf"/></defs><use href="#SVGmEns5cJB"/><use href="#SVGmEns5cJB"/><path class="g5xqtsbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:new-tab"} {...others} />);
}

export default Component;
