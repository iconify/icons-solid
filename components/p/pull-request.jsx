import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abgdj92nu.css';
import '../../css/g/ggga5ib7k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="abgdj92nu"/><path class="ggga5ib7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:pull-request"} {...others} />);
}

export default Component;
