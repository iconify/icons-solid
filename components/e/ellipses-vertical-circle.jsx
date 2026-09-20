import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufvn0ab1g.css';
import '../../css/g/gbeeqjbbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ufvn0ab1g"/><path class="gbeeqjbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:ellipses-vertical-circle"} {...others} />);
}

export default Component;
