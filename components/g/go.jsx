import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n07rvdbgg.css';
import '../../css/i/iigxsq-iw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n07rvdbgg"/><path class="iigxsq-iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:go"} {...others} />);
}

export default Component;
