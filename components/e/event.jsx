import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_757dk6o.css';
import '../../css/t/the1faccv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n_757dk6o"/><path class="the1faccv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:event"} {...others} />);
}

export default Component;
