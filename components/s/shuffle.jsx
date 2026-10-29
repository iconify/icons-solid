import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yt7fgz99d.css';
import '../../css/k/kzyrmlb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yt7fgz99d"/><path class="kzyrmlb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shuffle"} {...others} />);
}

export default Component;
