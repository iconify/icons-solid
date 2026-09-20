import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhl1isbvq.css';
import '../../css/s/sdbok-sel.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qhl1isbvq"/><path class="sdbok-sel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-beard-style"} {...others} />);
}

export default Component;
