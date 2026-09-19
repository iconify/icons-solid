import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4wx7em1k.css';
import '../../css/a/a5g7susyd.css';
import '../../css/o/oi5qvth7c.css';
import '../../css/i/iqd4-rvaq.css';
import '../../css/w/weo7tpp0d.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="p4wx7em1k"/><path class="a5g7susyd"/><path class="oi5qvth7c"/><path class="iqd4-rvaq"/><path class="weo7tpp0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:launch-study-3"} {...others} />);
}

export default Component;
